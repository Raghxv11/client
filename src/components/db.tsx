"use client";
import React from "react";
import TypewriterBox from "@/components/typewriter/TypewriterBox";

interface AgentData {
  agent_id: string;
  gpu_count: string;
  memory_gb: string;
  availability_hours: string;
  status: string;
}

const DB: React.FC = () => {
  const agents: AgentData[] = [
    {
      "agent_id": "4j8gw",
      "gpu_count": "8",
      "memory_gb": "56",
      "availability_hours": "9",
      "status": "active"
    },
    {
      "agent_id": "8ucep",
      "gpu_count": "8",
      "memory_gb": "4",
      "availability_hours": "23",
      "status": "active"
    },
    {
      "agent_id": "hmfay",
      "gpu_count": "4",
      "memory_gb": "0",
      "availability_hours": "1",
      "status": "active"
    },
    {
      "agent_id": "5a2yt",
      "gpu_count": "2",
      "memory_gb": "4",
      "availability_hours": "19",
      "status": "active"
    },
    {
      "agent_id": "grs3g",
      "gpu_count": "0",
      "memory_gb": "0",
      "availability_hours": "15",
      "status": "Inactive"
    }
  ];

  return (
    <>
      <TypewriterBox />
      <div className="h-screen" id="db">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-[#F1F5F9] font-roboto text-5xl font-semibold -mt-60 mb-10">
            Live Database
          </h1>
          <div className="flex flex-col items-start gap-4 p-[20px_32px] bg-[#100D25] rounded-[16px]">
            <ul className="flex flex-col gap-6">
              <li className="flex gap-28">
                <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-48">
                  Agent Address
                </span>
                <span className="text-[#6366F1] font-inter text-sm font-bold w-24 text-center">
                  GPU Cores
                </span>
                <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-24 text-center">
                  RAM
                </span>
                <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-32 text-center">
                  Availability
                </span>
                <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-24 text-center">
                  Status
                </span>
              </li>
              <div className="bg-[#475569] h-[1px]"></div>
              {agents.map((data, index) => (
                <React.Fragment key={`${data.agent_id}-${index}`}>
                  <li className="flex gap-28">
                    <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-48">
                      {data.agent_id}
                    </span>
                    <span className="text-[#6366F1] font-inter text-sm font-bold w-24 text-center">
                      {data.gpu_count}
                    </span>
                    <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-24 text-center">
                      {data.memory_gb}
                    </span>
                    <span className="text-[#F1F5F9] font-roboto text-sm font-bold w-32 text-center">
                      {data.availability_hours}
                    </span>
                    <span
                      className={`font-roboto text-sm font-bold w-24 text-center ${
                        data.status === "active" ? "text-[#86EFAC]" : "text-[#FCA5A5]"
                      }`}
                    >
                      {data.status}
                    </span>
                  </li>
                  {index < agents.length - 1 && (
                    <div key={`separator-${index}`} className="bg-[#475569] h-[1px]"></div>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DB;
