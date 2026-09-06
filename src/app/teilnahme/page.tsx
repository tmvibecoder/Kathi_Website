import type { Metadata } from "next";
import { ParticipationPage } from "@/components/ParticipationPage";

export const metadata: Metadata = {
  title: "Deine Teilnahme | Kathi Miler",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function Page() { return <ParticipationPage />; }
