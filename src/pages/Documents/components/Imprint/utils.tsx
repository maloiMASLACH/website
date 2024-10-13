import { images } from "@shared/assets";

export const Items = [
  {
    content: (
      <p>
        This website is owned and operated by Vitreus DAO. <br /> <br />
        Email:{" "}
        <a href="mailto:support@vtrs.io" className="text-vitreus-gradient-from">
          support@vtrs.io
        </a>
        <br />
        Discord:{" "}
        <a
          href="https://discord.gg/vitreus"
          target="_blank"
          rel="noreferrer"
          className="text-vitreus-gradient-from mx-6 whitespace-nowrap"
        >
          https://discord.gg/vitreus&nbsp;
          <images.linkAlt className="inline-block" />
        </a>
        <br /> <br />
        As a DAO, there are no direct legal representatives. For contact, supports or concern, use
        our discord.
      </p>
    ),
  },
  {
    title: "1. General",
    content:
      "We are not willing or obliged to participate in dispute resolution procedures before a consumer arbitration board.",
  },
  {
    title: "2. The Following Information Is Mandatory According To German Law.",
  },
];
