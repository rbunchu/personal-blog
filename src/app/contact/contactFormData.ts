import { IRecaptcha } from "./IRecaptcha";

export class ContactFormData implements IRecaptcha {
  fullName: string;
  emailAddress: string;
  message: string;
  response: string;
};
