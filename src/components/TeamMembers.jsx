import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { teamStructure } from "../constants";

const TeamMemberCard = ({ member, index, delay = 0, size = "normal" }) => {
  const Icon = member.icon;
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const isLarge = size === "large";

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay + index * 0.05, 0.75)}
      className="group relative"
    >
      <div className="relative bg-[#0a1628]/80 rounded-sm overflow-hidden border-2 border-[#1e88e5]/60 hover:border-[#42a5f5] transition-all duration-500 backdrop-blur-sm shadow-[0_0_15px_rgba(30,136,229,0.3)] hover:shadow-[0_0_25px_rgba(30,136,229,0.5)]">

        <div
          className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#1e88e510_49%,#1e88e510_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,#1e88e510_49%,#1e88e510_51%,transparent_52%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div
          className={`relative ${isLarge ? "p-4" : "p-3"} flex items-center gap-3`}
        >
          <div
            className={`relative flex-shrink-0 ${
              isLarge ? "w-12 h-12" : "w-10 h-10"
            } rounded-sm border-2 border-[#1e88e5]/80 bg-[#0a1628]/90 flex items-center justify-center font-mono font-bold text-[#1e88e5] ${
              isLarge ? "text-base" : "text-sm"
            } group-hover:scale-110 group-hover:border-[#42a5f5] group-hover:text-[#42a5f5] group-hover:shadow-[0_0_15px_rgba(30,136,229,0.6)] transition-all duration-300`}
          >
            {initials}
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className={`text-[#e3f2fd] font-mono font-bold ${
                isLarge ? "text-base" : "text-sm"
              } mb-0.5 truncate group-hover:text-[#1e88e5] transition-all duration-300`}
            >
              {member.name}
            </h3>
            <p
              className={`text-[#64b5f6]/80 ${
                isLarge ? "text-xs" : "text-xs"
              } font-mono flex items-center gap-1`}
            >
              <Icon
                className={`${isLarge ? "w-3 h-3" : "w-3 h-3"} flex-shrink-0`}
                strokeWidth={2}
              />
              <span className="truncate">{member.role}</span>
            </p>
          </div>

          <div
            className={`absolute right-0 top-0 bottom-0 w-1 bg-[#1e88e5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(30,136,229,0.8)]`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const TeamMembers = () => {
  return (

    <div
      id="section-about"
      className="
        relative 
       mt-14
      "
   
    >
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Team.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4   max-w-3xl leading-[30px] mb-16 "
      >
              <div className="relative text-[#e3f2fd] text-[17px] Microgram bg-[#0a1628]/80 rounded-sm overflow-hidden border-2 border-[#1e88e5]/60 hover:border-[#42a5f5] transition-all duration-500 backdrop-blur-sm py-3 px-6 shadow-[0_0_15px_rgba(30,136,229,0.3)] hover:shadow-[0_0_25px_rgba(30,136,229,0.5)]">

        Kawakeb's success is driven by a talented team of developers, AI engineers,
        and creative technologists. Our innovation hub collaborates with industry
        leaders and researchers to push the boundaries of AI and immersive tech.
        </div>
      </motion.p>

      {/* TREE STRUCTURE */}
      <div className="space-y-0 relative">

        {/* Founders */}
        <div className="relative pb-16">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-sm border-2 border-[#1e88e5]/60 bg-[#0a1628]/80 text-[#1e88e5] text-sm font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(30,136,229,0.3)]">
              Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamStructure.founders.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                delay={0}
              />
            ))}
          </div>

          {/* Founders → consultant (V shape) */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-48px)] w-96 h-16 pointer-events-none"
            style={{ overflow: "visible" }}
          >
            <defs>
              <filter id="blueprintGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 96 0 L 192 48 M 288 0 L 192 48"
              stroke="#1e88e5"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeLinecap="square"
              filter="url(#blueprintGlow)"
            />
            {/* Blueprint measurement markers */}
            <circle cx="96" cy="0" r="3" fill="#1e88e5" />
            <circle cx="288" cy="0" r="3" fill="#1e88e5" />
            <circle cx="192" cy="48" r="3" fill="#1e88e5" />
          </svg>
        </div>

        {/* Consultant */}
        <div className="relative pb-16">
          <div className="grid grid-cols-1 max-w-md mx-auto">
            {teamStructure.consultant.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                delay={0.1}
              />
            ))}
          </div>

          {/* line down */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[2px] h-12 bg-[#1e88e5] shadow-[0_0_8px_rgba(30,136,229,0.8)]">
            {/* Measurement markers */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1e88e5] shadow-[0_0_8px_rgba(30,136,229,0.8)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1e88e5] shadow-[0_0_8px_rgba(30,136,229,0.8)]" />
          </div>
        </div>

        {/* Management */}
        <div className="relative pb-20">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-sm border-2 border-[#1e88e5]/60 bg-[#0a1628]/80 text-[#1e88e5] text-sm font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(30,136,229,0.3)]">
              Management
            </span>
          </div>

          <div className="grid grid-cols-1 max-w-md mx-auto">
            {teamStructure.leadership.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                delay={0.2}
              />
            ))}
          </div>

          {/* Distributor */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-4xl h-24 pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="blueprintGlow2">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="30"
              stroke="#1e88e5"
              strokeWidth="2"
              strokeDasharray="6 4"
              filter="url(#blueprintGlow2)"
            />

            <line
              x1="10"
              y1="30"
              x2="90"
              y2="30"
              stroke="#1e88e5"
              strokeWidth="2"
              strokeDasharray="6 4"
              filter="url(#blueprintGlow2)"
            />

            {[10, 30, 50, 70, 90].map((x) => (
              <g key={x}>
                <line
                  x1={x}
                  y1="30"
                  x2={x}
                  y2="60"
                  stroke="#1e88e5"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  filter="url(#blueprintGlow2)"
                />
                <circle cx={x} cy="30" r="2" fill="#1e88e5" />
                <circle cx={x} cy="60" r="2" fill="#1e88e5" />
              </g>
            ))}
            
            {/* Connection point markers */}
            <circle cx="50" cy="0" r="2" fill="#1e88e5" />
            <circle cx="10" cy="30" r="2" fill="#1e88e5" />
            <circle cx="90" cy="30" r="2" fill="#1e88e5" />
          </svg>
        </div>

        {/* Core Team */}
        <div className="relative pt-4">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-sm border-2 border-[#1e88e5]/60 bg-[#0a1628]/80 text-[#1e88e5] text-sm font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(30,136,229,0.3)]">
              Core Team
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamStructure.team.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                delay={0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;