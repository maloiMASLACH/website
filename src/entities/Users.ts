import { FieldValues } from "react-hook-form";
import { ImageUploaderChangeValues } from "vit-ui-kit";
import { SelectValue } from "vit-ui-kit/dist/components/SelectV2";

import { SortOrder } from "@entities/index.ts";

export interface UserToAdd {
  email: string;
  fullName: string;
  iamgroup: string;
  jobTitle: string;
  phone: string;
  walletAddress: string;
}

export interface UserFromBE {
  email: string;
  fullName: string;
  iamgroup: string;
  jobTitle: string;
  lastLogin: string;
  phone: string;
  walletAddress: string;
  _id: string;
}

export interface UsersFilter {
  limit?: number;
  offset?: number;
  sortField?: string;
  sortOrder?: SortOrder;
  iamgroup?: Roles;
  jobTitle?: string;
}

export enum Roles {
  User = "user",
  SuperAdmin = "super admin",
  Admin = "admin",
}

export interface LoggedUser {
  address: string;
  clientId: string;
  role: Roles;
  userId: string;
  exp: number;
  iat: number;
}

export interface UserFormData extends FieldValues {
  avatar: ImageUploaderChangeValues;
  fullName: string;
  role: SelectValue<Roles>;
  walletAddress: string;
  mobileNumber: string;
  emailAddress: string;
  jobTitle: string;
}
