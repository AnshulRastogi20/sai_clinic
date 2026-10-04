// Single source of truth for every phone number, address and timing on the
// site. Edit here, never inline in a component.

export const CLINIC = {
  name: "Sai Clinic",
  since: 2000,
  address: {
    line1: "H2, Block 7/29, Sector 2",
    line2: "Rajendra Nagar, Sahibabad",
    city: "Ghaziabad, Uttar Pradesh",
  },
  previousAddress: "B-65, Shalimar Garden Extension II",
  mapsUrl: "https://maps.app.goo.gl/oLEpHbjnXjxaZJEY8",
  facebookUrl: "https://www.facebook.com/profile.php?id=61576500987091",
  hours: [
    { days: "Monday to Friday", time: "6:00 PM - 8:00 PM" },
    { days: "Saturday & Sunday", time: "By appointment" },
  ],
} as const;

export type DoctorId = "vipin" | "lalita";

export interface Doctor {
  id: DoctorId;
  name: string;
  shortName: string;
  role: string;
  designation: string;
  qualifications: string[];
  experience: string;
  phone: string; // 10 digits, no country code
  photo: string;
  bio: string[];
}

export const DOCTORS: Doctor[] = [
  {
    id: "vipin",
    name: "Dr. Vipin Rastogi",
    shortName: "Dr. Vipin",
    role: "Senior Physician",
    designation: "Senior Physician & Hospital Management Expert",
    qualifications: ["MBBS", "M.Phil.", "MBA"],
    experience: "25+ years",
    phone: "9501324120",
    photo: "/photos/f924ded8-d730-4db3-b771-57324a6d700c.png",
    bio: [
      "Dr. Vipin Rastogi spent 15 years as an emergency and critical care doctor at Sir Ganga Ram Hospital, Old Rajendra Nagar, and Sant Parmanand Hospital, Civil Lines, Delhi, touching countless lives with his expertise and dedication.",
      "He went on to lead the management of esteemed hospitals for over a decade, including Jain Neuro, Tirath Ram Shah Charitable Hospital, and Goyal Hospital and Urology Centre. He brings that rare balance of clinical excellence and hospital leadership to every patient he sees.",
    ],
  },
  {
    id: "lalita",
    name: "Dr. Lalita Rastogi",
    shortName: "Dr. Lalita",
    role: "Gynaecologist & Obstetrician",
    designation: "Gynaecologist, Obstetrician, Infertility & Infection Control Specialist",
    qualifications: ["MBBS", "MD", "PGDMH"],
    experience: "20+ years",
    phone: "9999617277",
    photo: "/photos/d536ac5a-a70a-4d1d-a618-d6bda31e6875.png",
    bio: [
      "Dr. Lalita Rastogi brings over 20 years of experience in gynaecology, obstetrics and infertility treatment. Her compassionate, patient-centred approach has earned her a trusted name among the women and families she has cared for.",
      "She served for several years as Consultant Gynaecologist at Narinder Mohan Hospital, and in recent years has made significant contributions to hospital infection prevention and control, raising standards of patient safety.",
    ],
  },
];

export const PRIMARY_DOCTOR = DOCTORS[0];

export const formatPhone = (digits: string) =>
  `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;

export const telLink = (digits: string) => `tel:+91${digits}`;

export const waLink = (digits: string, text?: string) =>
  `https://wa.me/91${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
