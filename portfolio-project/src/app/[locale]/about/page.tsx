"use client"

import NavBar from "../../../components/UI/NavBar";
import Timeline from "../../../components/AboutMe/Timeline";
import { useTranslations } from "next-intl";
import { TimelineItem } from "../../../types/timeline";

export default function AboutPage() {
  const t = useTranslations("about");
  const timeline = t.raw("timeline") as TimelineItem[];

  return (
    <div className="page-container">
      <NavBar />
      <main className="font-sora m-4 sm:m-8 sm:pb-8">
        <header className="mx-auto mb-20 max-w-6xl pt-16">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-jetbrains text-xs font-medium tracking-wider sm:text-sm">
              01 / HOW I GOT HERE
            </span>

            <span className="h-px flex-1 bg-black dark:bg-white" />
          </div>
        </header>
        <Timeline items={timeline}/>
      </main>
    </div>
  );
}
