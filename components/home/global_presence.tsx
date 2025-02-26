"use client";

import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { Building2, Users, Stethoscope, Globe2 } from "lucide-react";

const geoUrl = "/world-countries.json";

const regions = [
  {
    name: "Our Base - East Africa",
    description:
      "Headquartered in Kenya, we bridge the gap between global healthcare excellence and African patients.",
    icon: Globe2,
    highlights: [
      "Strategic location in East Africa",
      "Regional healthcare coordination",
      "Local support and assistance",
    ],
  },
  {
    name: "Target Healthcare Destinations",
    description:
      "Partnerships with leading healthcare providers in countries known for medical excellence.",
    icon: Building2,
    highlights: [
      "Germany - Advanced Medical Technology",
      "Switzerland - Precision Healthcare",
      "USA - Innovative Treatments",
    ],
  },
  {
    name: "Emerging Medical Hubs",
    description:
      "Collaborations with rapidly developing medical tourism destinations.",
    icon: Stethoscope,
    highlights: [
      "India - Comprehensive Care",
      "Turkey - Modern Facilities",
      "Thailand - Specialized Services",
    ],
  },
];

interface Marker {
  coordinates: [number, number];
  name: string;
  type: "base" | "africa" | "global";
}

// Updated markers with African network
const markers: Marker[] = [
  // Base
  { coordinates: [36.8219, -1.2921], name: "Kenya", type: "base" }, // Kenya (Base)

  // African Network
  { coordinates: [32.2903, 1.3733], name: "Uganda", type: "africa" }, // Uganda
  { coordinates: [39.2083, -6.3728], name: "Tanzania", type: "africa" }, // Tanzania
  { coordinates: [29.9189, -1.9403], name: "Rwanda", type: "africa" }, // Rwanda
  { coordinates: [38.7578, 9.0084], name: "Ethiopia", type: "africa" }, // Ethiopia

  // Global Destinations
  { coordinates: [10.4515, 51.1657], name: "Germany", type: "global" }, // Germany
  { coordinates: [8.2275, 46.8182], name: "Switzerland", type: "global" }, // Switzerland
  { coordinates: [-95.7129, 37.0902], name: "USA", type: "global" }, // USA
  { coordinates: [78.9629, 20.5937], name: "India", type: "global" }, // India
  { coordinates: [35.2433, 38.9637], name: "Turkey", type: "global" }, // Turkey
  { coordinates: [100.9925, 15.87], name: "Thailand", type: "global" }, // Thailand
];

export function GlobalPresence() {
  return (
    <section className='relative py-24 overflow-hidden bg-[#0284C7]'>
      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top right gradient orb to blend with Mission section's bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -right-32 w-64 h-64 bg-[#38BDF8] rounded-full blur-[120px] opacity-30'
        />
      </div>

      <div className='container px-6 mx-auto'>
        {/* Section Header */}
        <motion.div
          className='max-w-3xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Bridging <span className='text-[#4ADE80]'>Global Healthcare</span>
          </h2>
          <p className='text-white'>
            From our base in Kenya, we connect patients with world-class
            healthcare facilities in leading medical destinations
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className='relative mb-16 bg-[#0369A1] border border-white/20 rounded-xl p-4 overflow-hidden shadow-lg'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <div className='w-full'>
            <ComposableMap
              projection='geoMercator'
              projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 200,
                center: [20, 5],
              }}
              style={{
                pointerEvents: "none",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}>
              <Geographies geography='/world-countries.json'>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill='#0F172A'
                      stroke='#1E293B'
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* African Network Connections */}
              {markers
                .filter((m) => m.type === "africa")
                .map((marker, index) => (
                  <motion.g key={`connection-africa-${index}`}>
                    <Line
                      from={markers[0].coordinates}
                      to={marker.coordinates}
                      stroke='#4ADE80'
                      strokeWidth={1.5}
                      strokeLinecap='round'
                      strokeDasharray='2,4'
                      strokeOpacity={0.8}
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        translateX: [
                          markers[0].coordinates[0],
                          marker.coordinates[0],
                          marker.coordinates[0],
                        ],
                        translateY: [
                          markers[0].coordinates[1],
                          marker.coordinates[1],
                          marker.coordinates[1],
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      r={1.5}
                      fill='#4ADE80'
                      style={{ originX: "50%", originY: "50%" }}
                    />
                  </motion.g>
                ))}

              {/* Global Connections */}
              {markers
                .filter((m) => m.type === "global")
                .map((marker, index) => (
                  <motion.g key={`connection-global-${index}`}>
                    <Line
                      from={markers[0].coordinates}
                      to={marker.coordinates}
                      stroke='#38BDF8'
                      strokeWidth={1.5}
                      strokeLinecap='round'
                      strokeOpacity={0.8}
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        translateX: [
                          markers[0].coordinates[0],
                          marker.coordinates[0],
                          marker.coordinates[0],
                        ],
                        translateY: [
                          markers[0].coordinates[1],
                          marker.coordinates[1],
                          marker.coordinates[1],
                        ],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      r={2}
                      fill='#38BDF8'
                      style={{ originX: "50%", originY: "50%" }}
                    />
                  </motion.g>
                ))}

              {/* Markers */}
              {markers.map(({ coordinates, name, type }, index) => (
                <motion.g key={index}>
                  <Marker coordinates={coordinates}>
                    <g transform='translate(-12, -24)'>
                      <motion.circle
                        r={type === "base" ? 5 : type === "africa" ? 3 : 4}
                        cx={12}
                        cy={24}
                        fill={
                          type === "base"
                            ? "#4ADE80"
                            : type === "africa"
                            ? "#4ADE80"
                            : "#38BDF8"
                        }
                        opacity={
                          type === "base" ? 1 : type === "africa" ? 0.9 : 0.8
                        }
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          delay: index * 0.1,
                        }}
                      />
                      {type === "base" && (
                        <motion.circle
                          r={10}
                          cx={12}
                          cy={24}
                          fill='#4ADE80'
                          opacity={0.3}
                          initial={{ scale: 0 }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      {name && (
                        <motion.g
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}>
                          <rect
                            x={0}
                            y={0}
                            width={24}
                            height={20}
                            rx={4}
                            fill={type === "base" ? "#0F172A" : "#0F172A"}
                            strokeWidth={1.5}
                            stroke={
                              type === "base"
                                ? "#4ADE80"
                                : type === "africa"
                                ? "#4ADE80"
                                : "#38BDF8"
                            }
                            opacity={type === "africa" ? 0.95 : 1}
                          />
                          <text
                            x={12}
                            y={14}
                            fontSize={8}
                            fontWeight='bold'
                            fill={
                              type === "base"
                                ? "#4ADE80"
                                : type === "africa"
                                ? "#4ADE80"
                                : "#38BDF8"
                            }
                            textAnchor='middle'>
                            {name}
                          </text>
                        </motion.g>
                      )}
                    </g>
                  </Marker>
                </motion.g>
              ))}
            </ComposableMap>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='bg-[#0284C7] border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
              <region.icon className='w-8 h-8 text-[#4ADE80] mb-4' />
              <h3 className='text-xl font-medium text-white mb-2'>
                {region.name}
              </h3>
              <p className='text-white text-sm mb-4'>{region.description}</p>
              <ul className='space-y-2'>
                {region.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className='flex items-center text-white text-sm'>
                    <span className='w-2 h-2 rounded-full bg-[#4ADE80] mr-2' />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
