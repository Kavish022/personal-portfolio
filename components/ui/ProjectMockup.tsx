"use client";

interface ProjectMockupProps {
  type: "hrms" | "ecommerce" | "kanban" | "productivity";
  accentColor?: string;
}

export function ProjectMockup({ type }: ProjectMockupProps) {
  if (type === "hrms") {
    return (
      <div className="w-full h-full bg-slate-50 dark:bg-[#0d0e12] text-xs font-mono select-none overflow-hidden p-4 rounded-xl border border-black/[0.08] dark:border-white/10 flex flex-col gap-3 shadow-xs">
        {/* Window controls bar */}
        <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] text-zinc-500 font-sans">hrms.recruitment-portal.internal</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 dark:bg-[#c5ff4a]/10 dark:text-[#c5ff4a] font-sans font-medium">
            ● PostgreSQL Live
          </span>
        </div>

        {/* Top metrics summary */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white dark:bg-white/[0.03] p-2.5 rounded-lg border border-black/[0.06] dark:border-white/5 shadow-xs">
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans">Active Candidates</div>
            <div className="text-base font-bold text-zinc-900 dark:text-white font-sans mt-0.5">342</div>
            <div className="text-[9px] text-emerald-600 dark:text-[#c5ff4a] mt-0.5 font-sans">↑ +28 this week</div>
          </div>
          <div className="bg-white dark:bg-white/[0.03] p-2.5 rounded-lg border border-black/[0.06] dark:border-white/5 shadow-xs">
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans">Interview Pipeline</div>
            <div className="text-base font-bold text-zinc-900 dark:text-white font-sans mt-0.5">48</div>
            <div className="text-[9px] text-amber-600 dark:text-amber-400 mt-0.5 font-sans">12 today</div>
          </div>
          <div className="bg-white dark:bg-white/[0.03] p-2.5 rounded-lg border border-black/[0.06] dark:border-white/5 shadow-xs">
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans">REST API Health</div>
            <div className="text-base font-bold text-zinc-900 dark:text-white font-sans mt-0.5">99.9%</div>
            <div className="text-[9px] text-emerald-600 dark:text-[#c5ff4a] mt-0.5 font-sans">Sequelize ORM</div>
          </div>
        </div>

        {/* Interactive Data Table Preview */}
        <div className="flex-1 bg-white dark:bg-white/[0.02] rounded-lg border border-black/[0.06] dark:border-white/5 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 bg-zinc-100/70 dark:bg-white/[0.02] border-b border-black/[0.06] dark:border-white/5 text-[10px] text-zinc-500 dark:text-zinc-400 font-sans font-medium">
            <span>Candidate Name</span>
            <span className="hidden sm:inline">Role Applied</span>
            <span>Department</span>
            <span>Stage</span>
          </div>
          <div className="divide-y divide-black/[0.04] dark:divide-white/5 text-[11px] text-zinc-600 dark:text-zinc-300">
            <div className="flex items-center justify-between px-3 py-2 hover:bg-zinc-50 dark:hover:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[9px] font-bold">
                  SR
                </span>
                <span className="font-sans font-medium text-zinc-900 dark:text-white">Sarah Ross</span>
              </div>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans hidden sm:inline">Lead Full Stack</span>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans">Core Eng</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Selected
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 hover:bg-zinc-50 dark:hover:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[9px] font-bold">
                  DK
                </span>
                <span className="font-sans font-medium text-zinc-900 dark:text-white">David Kim</span>
              </div>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans hidden sm:inline">React Architect</span>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans">Product</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Interview
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 hover:bg-zinc-50 dark:hover:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[9px] font-bold">
                  AL
                </span>
                <span className="font-sans font-medium text-zinc-900 dark:text-white">Anya Lindt</span>
              </div>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans hidden sm:inline">Backend Node.js</span>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans">Platform</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                Onboarding
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "kanban") {
    return (
      <div className="w-full h-full bg-slate-50 dark:bg-[#0e0c14] text-xs select-none overflow-hidden p-4 rounded-xl border border-black/[0.08] dark:border-white/10 flex flex-col gap-3 shadow-xs">
        {/* Kanban Board Header for B2B OMS Pricing Approval */}
        <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-bold text-zinc-900 dark:text-white text-[11px] font-sans">B2B OMS • Pricing Approval Engine</span>
            <span className="text-[10px] text-zinc-500 font-mono">Real-time Margin Calc</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-mono">
              Audit Active
            </span>
          </div>
        </div>

        {/* 3 Columns Preview representing approval workflow transitions */}
        <div className="grid grid-cols-3 gap-2 flex-1">
          {/* Column 1: Pending Approval */}
          <div className="bg-zinc-100/70 dark:bg-white/[0.02] p-2 rounded-lg border border-black/[0.06] dark:border-white/5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] font-medium text-zinc-600 dark:text-zinc-400 mb-1">
              <span>Pending</span>
              <span className="px-1 rounded bg-black/5 dark:bg-white/5 text-[9px] text-zinc-700 dark:text-zinc-300">2</span>
            </div>
            <div className="bg-white dark:bg-white/[0.04] p-2 rounded border border-black/[0.08] dark:border-purple-500/30 shadow-xs">
              <span className="text-[8px] font-mono px-1 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300">#OMS-104</span>
              <div className="text-[10px] text-zinc-900 dark:text-white font-medium mt-1">Tier-1 Wholesale 18% Disc</div>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/[0.06] dark:border-white/5 text-[8px] text-zinc-500 dark:text-zinc-400">
                <span>Margin: 24.5%</span>
                <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">KB</span>
              </div>
            </div>
            <div className="bg-white dark:bg-white/[0.04] p-2 rounded border border-black/[0.08] dark:border-white/5 shadow-xs">
              <span className="text-[8px] font-mono px-1 rounded bg-sky-500/15 text-sky-700 dark:text-sky-300">#OMS-208</span>
              <div className="text-[10px] text-zinc-900 dark:text-white font-medium mt-1">Custom volume tier review</div>
            </div>
          </div>

          {/* Column 2: In Review / Rework */}
          <div className="bg-zinc-100/70 dark:bg-white/[0.02] p-2 rounded-lg border border-black/[0.06] dark:border-white/5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] font-medium text-zinc-600 dark:text-zinc-400 mb-1">
              <span>Rework</span>
              <span className="px-1 rounded bg-black/5 dark:bg-white/5 text-[9px] text-zinc-700 dark:text-zinc-300">1</span>
            </div>
            <div className="bg-white dark:bg-white/[0.04] p-2 rounded border border-black/[0.08] dark:border-amber-500/30 shadow-xs">
              <span className="text-[8px] font-mono px-1 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300">#OMS-312</span>
              <div className="text-[10px] text-zinc-900 dark:text-white font-medium mt-1">Finance margin threshold</div>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/[0.06] dark:border-white/5 text-[8px] text-zinc-500 dark:text-zinc-400">
                <span>Flagged</span>
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">AL</span>
              </div>
            </div>
          </div>

          {/* Column 3: Approved */}
          <div className="bg-zinc-100/70 dark:bg-white/[0.02] p-2 rounded-lg border border-black/[0.06] dark:border-white/5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] font-medium text-zinc-600 dark:text-zinc-400 mb-1">
              <span>Approved</span>
              <span className="px-1 rounded bg-black/5 dark:bg-white/5 text-[9px] text-zinc-700 dark:text-zinc-300">14</span>
            </div>
            <div className="bg-white dark:bg-white/[0.04] p-2 rounded border border-black/[0.08] dark:border-emerald-500/20 shadow-xs opacity-90">
              <span className="text-[8px] font-mono px-1 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">#OMS-098</span>
              <div className="text-[10px] text-zinc-800 dark:text-zinc-200 font-medium mt-1">APAC distributor contract</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "productivity") {
    // Baby Care Healthcare Portal & Nurse Directory
    return (
      <div className="w-full h-full bg-slate-50 dark:bg-[#120a10] text-xs select-none overflow-hidden p-4 rounded-xl border border-black/[0.08] dark:border-white/10 flex flex-col gap-3 shadow-xs">
        {/* Healthcare Topbar */}
        <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-zinc-900 dark:text-white text-[11px] font-sans">Baby Care Portal • Healthcare System</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            <span>Firebase OTP: Active</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 font-medium">
              E-Sign Verified
            </span>
          </div>
        </div>

        {/* Nurse Directory Activity Overview */}
        <div className="bg-white dark:bg-white/[0.03] p-2.5 rounded-lg border border-black/[0.06] dark:border-white/5 shadow-xs flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">
            <span>Verified Nurse Directory & Booking Traffic</span>
            <span className="text-emerald-600 dark:text-[#c5ff4a] font-bold">240+ Active Caregivers</span>
          </div>
          <div className="flex gap-1 h-3.5 items-center">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                style={{ animationDelay: `${(i % 7) * 200}ms` }}
                className={`flex-1 h-full rounded-sm transition-all duration-300 hover:scale-125 ${
                  i % 4 === 0
                    ? "bg-emerald-600 dark:bg-[#c5ff4a] animate-pulse"
                    : i % 3 === 0
                    ? "bg-emerald-500/70 dark:bg-[#c5ff4a]/60"
                    : i % 2 === 0
                    ? "bg-emerald-400/40 dark:bg-[#c5ff4a]/30"
                    : "bg-zinc-200 dark:bg-white/5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Split telemetry blocks */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-white dark:bg-white/[0.03] p-2.5 rounded-lg border border-black/[0.06] dark:border-white/5 shadow-xs flex flex-col justify-between">
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Digital Contracts Executed</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white font-mono">1,820+</div>
            <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">100% In-Portal Signatures</div>
          </div>
          <div className="bg-white dark:bg-white/[0.03] p-2.5 rounded-lg border border-black/[0.06] dark:border-white/5 shadow-xs flex flex-col justify-between">
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Angular & RxJS Streaming</div>
            <div className="text-xl font-bold text-rose-600 dark:text-rose-300 font-mono">0.08s</div>
            <div className="text-[9px] text-zinc-500 dark:text-zinc-400 font-medium">Reactive Directory Updates</div>
          </div>
        </div>
      </div>
    );
  }

  // type: ecommerce / cloud
  return (
    <div className="w-full h-full bg-slate-50 dark:bg-[#0a0c10] text-xs select-none overflow-hidden p-4 rounded-xl border border-black/[0.08] dark:border-white/10 flex flex-col gap-3 shadow-xs">
      {/* Navigation bar */}
      <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/5">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider text-zinc-900 dark:text-white text-[11px] font-mono">DOCKER / CLOUD</span>
          <span className="text-[10px] text-zinc-500">Node.js Microservices</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            PostgreSQL • Supabase
          </span>
        </div>
      </div>

      {/* Service Containers Row */}
      <div className="grid grid-cols-2 gap-2.5 flex-1">
        <div className="bg-white dark:bg-white/[0.03] rounded-lg p-2.5 border border-black/[0.06] dark:border-white/5 shadow-xs flex flex-col justify-between group">
          <div className="h-20 bg-gradient-to-tr from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 rounded flex items-center justify-center relative overflow-hidden">
            <div className="w-12 h-8 rounded bg-sky-500/20 border border-sky-400/40 transform -rotate-6 shadow-md flex items-center justify-center text-[9px] text-sky-600 dark:text-sky-300 font-mono font-medium">
              REST:OK
            </div>
            <span className="absolute top-1 right-1 px-1 py-0.5 text-[8px] bg-black/60 dark:bg-black/60 rounded text-zinc-100 dark:text-zinc-300 font-mono">
              PORT 5000
            </span>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-zinc-900 dark:text-white">API Gateway Node.js</span>
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 font-mono">HTTP 200</span>
            </div>
            <div className="text-[9px] text-zinc-500 dark:text-zinc-400 mt-0.5">DTO Schema Validation • Zod</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex text-amber-500 dark:text-amber-400 text-[9px]">★★★★★</div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300 font-medium">
                Live
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-white/[0.03] rounded-lg p-2.5 border border-black/[0.06] dark:border-white/5 shadow-xs flex flex-col justify-between group">
          <div className="h-20 bg-gradient-to-tr from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 rounded flex items-center justify-center relative overflow-hidden">
            <div className="w-10 h-10 rounded-full border-2 border-emerald-500/40 bg-emerald-500/20 shadow-md flex items-center justify-center text-[9px] text-emerald-600 dark:text-emerald-300 font-mono font-medium">
              SQL
            </div>
            <span className="absolute top-1 right-1 px-1 py-0.5 text-[8px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded font-mono font-medium">
              PG-16
            </span>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-zinc-900 dark:text-white">PostgreSQL Cluster</span>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">&lt;4ms</span>
            </div>
            <div className="text-[9px] text-zinc-500 dark:text-zinc-400 mt-0.5">Sequelize Models & Indexing</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex text-amber-500 dark:text-amber-400 text-[9px]">★★★★★</div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 font-medium">
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
