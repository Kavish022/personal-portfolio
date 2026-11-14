"use client";

import { useState } from "react";
import { skillsCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";
import { Code2, Palette, Server, Wrench } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code2 className="w-4 h-4" />;
      case "styling-ui":
        return <Palette className="w-4 h-4" />;
      case "backend-db":
        return <Server className="w-4 h-4" />;
      case "tools":
        return <Wrench className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };
  const selectedCategoryData = skillsCategories.find(
    (c) => c.id === activeCategory
  ) || skillsCategories[0];
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          label="Toolbox"
          title="Skills &"
          highlight="Technologies"
          description="A production-proven skillset covering React.js, Angular, TypeScript, Node.js, REST APIs, PostgreSQL, and Docker."
        />
        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-black/[0.08] dark:border-white/[0.06]">
          {skillsCategories.map((category) => {
            const isSelected = category.id === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-emerald-600 text-white font-semibold shadow-sm dark:bg-[#c5ff4a] dark:text-black dark:shadow-[0_0_15px_rgba(197,255,74,0.3)]"
                    : "bg-black/[0.03] text-zinc-600 hover:text-zinc-950 hover:bg-black/[0.06] border border-black/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.06] dark:border-white/5"
                }`}
              >
                <span>{getCategoryIcon(category.id)}</span>
                <span>{category.name}</span>
                <span
                  className={`ml-1 text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white dark:bg-black/20 dark:text-black"
                      : "bg-black/5 text-zinc-600 dark:bg-white/5 dark:text-zinc-500"
                  }`}
                >
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>
        {/* Category Description Banner */}
        <div className="mb-8 p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/5 shadow-sm dark:shadow-none flex items-center justify-between">
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
            {selectedCategoryData.shortDescription}
          </p>
          <span className="text-xs font-mono text-emerald-700 dark:text-[#c5ff4a] hidden sm:inline font-medium">
            Interactive Tilt Cards Enabled
          </span>
        </div>
        {/* Dynamic Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedCategoryData.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
