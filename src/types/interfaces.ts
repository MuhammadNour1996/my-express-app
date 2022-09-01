import { PopulatedDoc, Document, Types } from "mongoose";

export interface Genre {
  _id: Types.ObjectId;
  name: string;
  url: string;
  books: Array<PopulatedDoc<Book & Document>>;
}

export interface Author {
  _id: Types.ObjectId;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  books: Array<PopulatedDoc<Book & Document>>;
}

export interface Book {
  _id: Types.ObjectId;
  title: string;
  summary: string;
  isbn: string;
  url: string;
  author: PopulatedDoc<Author & Document>;
  genres: Array<PopulatedDoc<Genre & Document>>;
  book_instanses: Array<PopulatedDoc<Genre & Document>>;
}

export interface BookInstance {
  _id: Types.ObjectId;
  imprint: string;
  status: string;
  due_back: Date;
  url: string;
  book: PopulatedDoc<Book & Document>;
}













//////////////////////////////////////////////////////////////////////////
export interface IUsers {
  _id: Types.ObjectId | string;
  email: string;
  phoneNumber: string;
  password: string;
  profilePicture: string;
  firstName: string;
  lastName: string;
  gender:
    "Male" | "Female";
  DOB:Date;
  address: {
    country: string;
    government: string;
    manipolicity: string;
  }[];
  verified: 
    "notSent" | "pending" | "verified";
  status:
    "inActive" | "active" | "suspended" | "lost" | "deleted";
  accountType:
    "PT" | "EM" | "PA";
  lastLoginDate: Date;
  accountSetting: Object;
  languages: string[];
  maritalStatus:   
    "married" | "single" | "divorced" | "widow";
}

export interface IRoles {
  _id: Types.ObjectId;
  name: string;
  employees?: string[] | Types.ObjectId[] | IEmployees[];
  employeesArr?: Array<PopulatedDoc<IEmployees & Document>>;
  users: string[];
  service_provider: string[];
  clients: string[];
  sessions: string[];
  communications: string[];
  disputes: string[];
  enum_values: string[];
}

export interface IEmployees {
  _id: Types.ObjectId;
  uID?: string | Types.ObjectId;
  user: PopulatedDoc<IUsers & Document>;
  roleID?: string | Types.ObjectId;
  role: PopulatedDoc<IRoles & Document>;
  salery: Number;
  attachments: {
    name: string;
    url: string;
    type: string;
  }[];
}

export interface IClients {
  _id: Types.ObjectId;
  uID?: string | Types.ObjectId;
  user: PopulatedDoc<IUsers & Document>;
  prefferedServiceType:
  "online" | "home" | "office"
  diseases: string;
  preferences: Object;
}