import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Users, Download, Star, Clock, TrendingUp, Smartphone } from "lucide-react";

const games = [
  {
    title: "BALLS FACTORY",
    stats: [
      { label: "Monthly Active Users", value: "300K", icon: Users },
      { label: "Development Time", value: "4 Months", icon: Clock },
      { label: "User Rating", value: "4.7", icon: Star }
    ],
    gradient: "from-orange-400 via-red-500 to-pink-500",
    accentColor: "orange",
    description: "A highly engaging physics-based hypercasual game that has captured the attention of hundreds of thousands of players worldwide.",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tastypill.ballsfactory&hl=fr",
    iosUrl: "https://apps.apple.com/us/app/balls-factory/id6503159875",
    img:"1.webp"
  },
  {
    title: "MONEY BANK 3D",
    stats: [
      { label: "Total Downloads", value: "30M", icon: Download },
      { label: "Development Time", value: "5 Months", icon: Clock },
      { label: "User Rating", value: "4.6", icon: Star }
    ],
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    accentColor: "emerald",
    description: "A viral sensation that achieved massive global success, demonstrating our ability to create games with widespread appeal and retention.",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tp.moneybank",
    iosUrl: "https://apps.apple.com/ca/app/money-bank-3d/id1523673634?l=fr-CA",
     img:"2.webp"
  },
  {
    title: "BOTTLE FACTORY",
    stats: [
      { label: "Total Downloads", value: "100+", icon: Download },
      { label: "Development Time", value: "3 Months", icon: Clock },
      { label: "User Rating", value: "3.0", icon: Star }
    ],
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
    accentColor: "cyan",
    description: "An innovative bottle production simulation game that challenges players with unique gameplay mechanics and strategic resource management.",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tastypill.bottlefactory",
    iosUrl: "#",
     img:"3.webp"
  }
];

const HypercasualGames = () => {
  return (
    <div className="relative z-50 w-full">
       <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="Microgram pb-1 uppercase flex flex-col gap-6 mt-16 sm:mt-0 text-3xl sm:text-4xl font-bold text-white max-w-[600px]"
            >
             
              <span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
                  Viral gaming experiences
                </span>
              </span>
            </motion.div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Hypercasual Games.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#eaeaea] text-[17px] max-w-3xl leading-[30px] mb-16"
      >
                <div className="group relative bg-gradient-to-br text-base leading-[30px] z-50 from-[#2d2d2d85]/50 to-[#0f0d2e]/50 p-6 rounded-e-xl backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden Microgram">
<div className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-5 rounded-e-3xl`}  />

              {/* Decorative border accent */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500`}
              />
        Our hypercasual games have reached millions of players worldwide, combining 
        addictive gameplay mechanics with polished execution. These titles showcase our 
        ability to create fast-paced, engaging experiences optimized for viral growth 
        and sustained player retention.
        </div>
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="group relative"
          >
            {/* Card container */}
            <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f0d2e]/40 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm">
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Game image/placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-30`} />
                
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="text-center">
                    <div className={`w-28 h-28 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${game.gradient}  `} >
                      <img src={game.img} className="rounded-3xl"/>
                      </div>
                    <p className="text-white/90 text-lg font-bold tracking-wider MicrogramBold">{game.title}</p>
                  </div>
                </div>

                {/* Corner accents */}
                <div className={`absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-${game.accentColor}-400 rounded-tr-3xl opacity-50`} />
                
                {/* Floating gradient orb */}
                <div className={`absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br ${game.gradient} opacity-20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`} />
              </div>

              {/* Content section */}
              <div className="relative p-6 space-y-4">
                {/* Title */}
                <h3 className="text-white font-black text-2xl tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300 MicrogramBold">
                  {game.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed Microgram">
                  {game.description}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {game.stats.map((stat, statIndex) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                      >
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${game.gradient} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>

                        {/* Stat info */}
                        <div className="flex-1">
                          <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5 Microgram">
                            {stat.label}
                          </p>
                          <p className="text-white font-bold text-xl MicrogramBold">
                            {stat.value}
                          </p>
                        </div>

                        {/* Trend indicator for first stat */}
                        {statIndex === 0 && (
                          <div className={`flex-shrink-0 text-${game.accentColor}-400`}>
                            <TrendingUp className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Download buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={game.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex MicrogramBold items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 text-white font-semibold text-sm group/btn"
                  >
                    <Smartphone className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="MicrogramBold">Android</span>
                  </a>
                  <a
                    href={game.iosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-white font-semibold text-sm group/btn"
                  >
                    <Smartphone className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="MicrogramBold">iOS</span>
                  </a>
                </div>

                {/* Bottom gradient line */}
                <div className={`h-1 w-full bg-gradient-to-r ${game.gradient} rounded-full`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-white/10 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2 MicrogramBold">
              30M+
            </p>
            <p className="text-gray-400 text-sm uppercase tracking-wide Microgram">Total Downloads</p>
          </div>
          <div>
            <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2 MicrogramBold">
              300K+
            </p>
            <p className="text-gray-400 text-sm uppercase tracking-wide Microgram">Monthly Active Users</p>
          </div>
          <div>
            <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2 MicrogramBold">
              4.6+
            </p>
            <p className="text-gray-400 text-sm uppercase tracking-wide Microgram">Average Rating</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(HypercasualGames, "hypercasual", "z-50");