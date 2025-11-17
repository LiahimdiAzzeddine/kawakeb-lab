import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Users, Code, Palette, Gamepad2, Lightbulb, Box } from "lucide-react";

const teamStructure = {
  founders: [
    { 
      name: "Othman Ramzi", 
      role: "Co-founder and CEO",
      gradient: "from-purple-400 via-violet-500 to-purple-600",
      icon: Users
    },
    { 
      name: "Khalil Bennis", 
      role: "Co-founder and CTO",
      gradient: "from-blue-400 via-indigo-500 to-blue-600",
      icon: Code
    },
  ],
  consultant: [
    { 
      name: "Lotfi ElAchak", 
      role: "Consultant",
      gradient: "from-amber-400 via-orange-500 to-amber-600",
      icon: Lightbulb
    },
  ],
  leadership: [
    { 
      name: "Janin Fatima Zohra", 
      role: "Team Lead",
      gradient: "from-pink-400 via-rose-500 to-pink-600",
      icon: Users
    },
  ],
  team: [
    { 
      name: "Liahimdi Azzedin", 
      role: "Backend Developer",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      icon: Code
    },
    { 
      name: "Abderahman BenMousa", 
      role: "Branding",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      icon: Palette
    },
    { 
      name: "Doud Laghmich", 
      role: "3D Artist",
      gradient: "from-cyan-400 via-blue-500 to-cyan-600",
      icon: Box
    },
    { 
      name: "Omar Aharrar", 
      role: "Unity 3D Developer",
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      icon: Gamepad2
    },
    { 
      name: "Soulaimane Maghroud", 
      role: "Game Designer",
      gradient: "from-yellow-400 via-orange-500 to-yellow-600",
      icon: Gamepad2
    },
    { 
      name: "Ghita Sbai", 
      role: "Unity 3D",
      gradient: "from-indigo-400 via-blue-500 to-indigo-600",
      icon: Code
    },
    { 
      name: "Nasrellah Elkhalifi", 
      role: "3D Artist",
      gradient: "from-teal-400 via-cyan-500 to-teal-600",
      icon: Box
    },
  ]
};

const TeamMemberCard = ({ member, index, delay = 0, size = "normal" }) => {
  const Icon = member.icon;
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const isLarge = size === "large";

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay + index * 0.05, 0.75)}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f0d2e]/40 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm">
        
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        {/* Content */}
        <div className={`relative ${isLarge ? 'p-4' : 'p-3'} flex items-center gap-3`}>
          {/* Initials Circle */}
          <div className={`relative flex-shrink-0 ${isLarge ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg bg-gradient-to-br ${member.gradient} flex items-center justify-center font-bold text-white ${isLarge ? 'text-base' : 'text-sm'} group-hover:scale-110 transition-transform duration-300`}>
            {initials}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${member.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
          </div>

          {/* Name and Role */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-white font-bold ${isLarge ? 'text-base' : 'text-sm'} mb-0.5 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300`}>
              {member.name}
            </h3>
            <p className={`text-gray-400 ${isLarge ? 'text-xs' : 'text-xs'} font-medium flex items-center gap-1`}>
              <Icon className={`${isLarge ? 'w-3 h-3' : 'w-3 h-3'} flex-shrink-0`} strokeWidth={2} />
              <span className="truncate">{member.role}</span>
            </p>
          </div>

          {/* Side accent */}
          <div className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </div>
    </motion.div>
  );
};

const TeamMembers = () => {
  return (
    <div id="section-about" className="relative z-50">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our talented professionals</p>
        <h2 className={styles.sectionHeadText}>Team.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#eaeaea] text-[17px] max-w-3xl leading-[30px] mb-16"
      >
        Kawakeb's success is driven by a talented team of developers, AI engineers, 
        and creative technologists. Our innovation hub collaborates with industry 
        leaders and researchers to push the boundaries of AI and immersive tech.
      </motion.p>

      {/* Organizational Tree */}
      {/* Organizational Tree */}
      <div className="space-y-0 relative">
        
        {/* Founders Level */}
        <div className="relative pb-16">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamStructure.founders.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} delay={0} />
            ))}
          </div>
          
          {/* Connection point below founders */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-12">
            <div className="w-full h-full bg-gradient-to-b from-purple-500/60 to-orange-500/60 rounded-full" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500/40 to-orange-500/40 blur-sm" />
          </div>
          
          {/* V-shape connecting founders to consultant */}
          <svg className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-48px)] w-96 h-16 pointer-events-none" style={{overflow: 'visible'}}>
            <defs>
              <linearGradient id="founder-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M 96 0 L 192 48 M 288 0 L 192 48" stroke="url(#founder-gradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Consultant Level */}
        <div className="relative pb-16">
          <div className="grid grid-cols-1 max-w-md mx-auto">
            {teamStructure.consultant.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} delay={0.1} />
            ))}
          </div>
          
          {/* Connection point below consultant */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-12">
            <div className="w-full h-full bg-gradient-to-b from-orange-500/60 to-pink-500/60 rounded-full" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-orange-500/40 to-pink-500/40 blur-sm" />
          </div>
        </div>

        {/* Team Lead Level */}
        <div className="relative pb-20">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 text-pink-300 text-sm font-semibold uppercase tracking-wider">
              Management
            </span>
          </div>
          <div className="grid grid-cols-1 max-w-md mx-auto">
            {teamStructure.leadership.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} delay={0.2} />
            ))}
          </div>
          
          {/* Tree branching to team members */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-12">
            <div className="w-full h-full bg-gradient-to-b from-pink-500/60 to-green-500/60 rounded-full" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-pink-500/40 to-green-500/40 blur-sm" />
          </div>
          
          {/* Multi-branch connections to team */}
          <svg className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-6xl h-20 pointer-events-none" style={{overflow: 'visible'}}>
            <defs>
              <linearGradient id="team-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Center line down */}
            <line x1="50%" y1="0" x2="50%" y2="48" stroke="url(#team-gradient)" strokeWidth="2" strokeLinecap="round"/>
            {/* Horizontal distributor */}
            <line x1="20%" y1="48" x2="80%" y2="48" stroke="url(#team-gradient)" strokeWidth="2" strokeLinecap="round"/>
            {/* Branches down to team positions */}
            <line x1="20%" y1="48" x2="20%" y2="80" stroke="url(#team-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="35%" y1="48" x2="35%" y2="80" stroke="url(#team-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="50%" y1="48" x2="50%" y2="80" stroke="url(#team-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="65%" y1="48" x2="65%" y2="80" stroke="url(#team-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="80%" y1="48" x2="80%" y2="80" stroke="url(#team-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            
            {/* Connection dots */}
            <circle cx="50%" cy="0" r="4" fill="rgb(236, 72, 153)" opacity="0.6"/>
            <circle cx="50%" cy="48" r="4" fill="rgb(34, 197, 94)" opacity="0.6"/>
            <circle cx="20%" cy="48" r="3" fill="rgb(34, 197, 94)" opacity="0.5"/>
            <circle cx="35%" cy="48" r="3" fill="rgb(34, 197, 94)" opacity="0.5"/>
            <circle cx="65%" cy="48" r="3" fill="rgb(34, 197, 94)" opacity="0.5"/>
            <circle cx="80%" cy="48" r="3" fill="rgb(34, 197, 94)" opacity="0.5"/>
          </svg>
        </div>

        {/* Team Members Level */}
        <div className="relative pt-4">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-300 text-sm font-semibold uppercase tracking-wider">
              Core Team
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamStructure.team.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} delay={0.3} />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default SectionWrapper(TeamMembers, "teamMembers", "z-50");