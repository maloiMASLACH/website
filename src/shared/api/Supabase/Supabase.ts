import { createClient } from "@supabase/supabase-js";
import { environment } from "@shared/config/environment.config.ts";

export interface BlogElem {
  id: bigint;
  created_at: string;
  author: string;
  title: string;
  short_info: string;
  full_info: string;
  image: string;
  is_important: boolean;
  is_reversed_title?: boolean;
  title_url?: string;
  video?: string;
  embed_video?: string;
  video_transcription?: string;
}

export interface BlogNews {
  mainNews: BlogElem[];
  additionalNews: BlogElem[];
}

export class Supabase {
  private static supabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY);

  // Fetch all news, separated into main and additional categories
  public static async getNews(): Promise<BlogNews> {
    const { data, error } = await Supabase.supabase.from("blog").select("*");
    if (error || !data) {
      console.error("Error fetching news:", error);
      return { mainNews: [], additionalNews: [] };
    }

    const sortedNews = (data as BlogElem[]).sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

    const mainNews = sortedNews.filter((elem) => elem.is_important);
    const additionalNews = sortedNews.filter((elem) => !elem.is_important);

    return { mainNews, additionalNews };
  }

  public static async getNewsById(id: string): Promise<BlogElem | null> {
    const { data } = await Supabase.supabase.from("blog").select("*").eq("id", id);

    if (!data) {
      return null;
    }
    return data[0];
  }

  public static async getNewsByTitle(id: string): Promise<BlogElem | null> {
    const { data } = await Supabase.supabase.from("blog").select("*").eq("title_url", id);

    if (!data) {
      return null;
    }
    return data[0];
  }

  public static async getNewsByParams({
    id,
    title,
  }: {
    id?: string;
    title?: string;
  }): Promise<BlogElem | null> {
    if (!id && !title) {
      return null;
    }

    if (id) {
      return await this.getNewsById(id);
    }

    if (title) {
      return await this.getNewsByTitle(title);
    }

    return null;
  }

  public static async getImage(name: string): Promise<string> {
    const { data } = await Supabase.supabase.storage.from("news").getPublicUrl(name);

    if (!data) {
      console.error("Error fetching image URL:", name);
      return "";
    }

    return data.publicUrl;
  }
}
