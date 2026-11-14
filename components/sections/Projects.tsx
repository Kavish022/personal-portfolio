"use client";

import { useState, useRef } from "react";
import { projectsData, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { animate } from "animejs";

const ITEMS_PER_PAGE = 4;

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filterCategories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length);
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 whenever category filter changes
  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1);

    if (gridRef.current) {
      animate(gridRef.current, {
        opacity: [0.3, 1],
        translateY: [10, 0],
        duration: 350,
        ease: "outExpo",
      });
    }
  };

  // Smooth animated transition when changing pages
  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) return;

    if (gridRef.current) {
      animate(gridRef.current, {
        opacity: [1, 0.2],
        translateY: [0, 8],
        duration: 160,
        ease: "inQuad",
        onComplete: () => {
          setCurrentPage(newPage);
          if (gridRef.current) {
            animate(gridRef.current, {
              opacity: [0.2, 1],
              translateY: [8, 0],
              duration: 350,
              ease: "outExpo",
            });
          }
        },
      });
    } else {
      setCurrentPage(newPage);
    }
  };

  // Render page number links with ellipsis if many pages
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let page = 1; page <= totalPages; page++) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            isActive={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 3) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Middle pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let page = startPage; page <= endPage; page++) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            label="Portfolio"
            title="Selected"
            highlight="Works"
            description="Production systems and flagship platforms, including Enterprise B2B OMS, full-stack HRMS, and Angular healthcare portals."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-black/[0.03] dark:bg-white/[0.03] p-1.5 rounded-full border border-black/[0.08] dark:border-white/5 backdrop-blur-md">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-emerald-600 text-white font-semibold shadow-sm dark:bg-[#c5ff4a] dark:text-black dark:shadow-[0_0_12px_rgba(197,255,74,0.3)]"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-black/5 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/5"
                }`}
              >
                {cat === "All" ? "All Works" : cat.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Project Cards with Transition Container */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 will-change-transform"
        >
          {paginatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>

        {/* Pagination in the JSX */}
        <div className="mt-14 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Current Page Status / Counter */}
          <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_8px_rgba(22,163,74,0.4)] dark:shadow-[0_0_8px_#c5ff4a]" />
            <span>
              Showing{" "}
              <strong className="text-zinc-900 dark:text-white font-semibold">
                {filteredProjects.length === 0 ? 0 : startIndex + 1}–{endIndex}
              </strong>{" "}
              of{" "}
              <strong className="text-zinc-900 dark:text-white font-semibold">
                {filteredProjects.length}
              </strong>{" "}
              projects
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span>
              Page{" "}
              <strong className="text-zinc-900 dark:text-white font-semibold">
                {currentPage}
              </strong>{" "}
              of{" "}
              <strong className="text-zinc-900 dark:text-white font-semibold">
                {totalPages}
              </strong>
            </span>
          </div>

          {/* Pagination Controls */}
          <Pagination className="w-auto mx-0">
            <PaginationContent className="bg-black/[0.02] dark:bg-white/[0.02] p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                />
              </PaginationItem>

              {renderPaginationItems()}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
