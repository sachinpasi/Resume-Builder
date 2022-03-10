export type NavLink = {
  name: string;
  href: string;
};

export type Main_Header_Type = {
  Name: string;
  ProfessionalTitle?: string;
  Email: string;
  PhoneNumber: string;
  Area: string;
  City: string;
  Country: string;
  Website: string;
  LinkedIn: string;
  GitHub: string;
  Medium: string;
};

export type Section_Heading_Type = {
  name: string;
};

export type Edit_Header_Modal_Type = {
  setisHeaderEditModalOpen: (value: boolean) => void;
  isHeaderEditModalOpen?: boolean;
};
