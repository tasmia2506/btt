"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Car, MessageCircle, Phone, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { vehicles } from "@/data/vehicles";
import { buildWhatsappUrl, business } from "@/config/business";

const tabs = [
  { label: "All", value: "all" },
  { label: "Sedans", value: "Sedan" },
  { label: "MPV / Premium", value: "MPV" },
];

export default function FleetFilter() {
  const [active, setActive] = useState("all");

  const visible = vehicles.filter((v) => {
    if (active === "all") return true;
    if (active === "MPV") return v.category.includes("MPV");
    return v.category === active;
  });

  return (
    <div>
      <Tabs value={active} onValueChange={setActive} className="mb-10">
        <TabsList variant="line" className="flex-wrap gap-2 bg-transparent p-0 h-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`rounded-full font-oswald uppercase tracking-wide h-auto px-5 py-2.5 border transition-colors data-active:shadow-none ${
                active === tab.value
                  ? "!bg-slag !text-ice !border-slag"
                  : "!bg-white !text-slag !border-stone/40 hover:!text-slag hover:!border-slag"
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-4">
        {visible.map((v) => (
          <Card
            key={v.slug}
            className="shrink-0 w-[80vw] snap-start sm:w-auto rounded-lg py-0 group"
          >
            <div className="relative h-44">
              <Image
                src={v.image}
                alt={v.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                <Badge variant="secondary">{v.category}</Badge>
                <Badge variant="default">{v.seats} Seats</Badge>
              </div>
              {v.outstationRoundTrip && (
                <Badge
                  variant="secondary"
                  className="absolute left-3 bottom-3 bg-slag/90 normal-case tracking-normal font-sans"
                >
                  {v.outstationRoundTrip.rate} outstation · {v.oneWayDrop?.rate ?? "one-way on request"}
                </Badge>
              )}
            </div>

            <CardContent className="flex flex-col flex-1 px-5 pb-6">
              <h3 className="font-oswald uppercase font-bold text-slag text-lg mb-1">{v.name}</h3>
              <p className="text-xs text-stone mb-3">
                {v.outstationRoundTrip
                  ? `Min ${v.outstationRoundTrip.dailyAverage} · Driver bata ${v.outstationRoundTrip.bata}`
                  : "Contact for confirmation"}
              </p>

              <div className="flex items-center gap-4 text-xs text-slag/70 mb-4 pb-4 border-b border-stone/20">
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} className="text-moss" /> {v.seats} Seats
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Car size={14} className="text-moss" /> {v.category}
                </span>
              </div>

              <div className="grid grid-cols-2 min-[380px]:grid-cols-4 gap-1.5 mb-4">
                <div className="bg-slag text-ice p-2 text-center">
                  <p className="font-oswald uppercase text-[9px] tracking-wide text-ice/60 mb-0.5">Outstation</p>
                  <p className="font-oswald text-xs font-bold text-lichen">
                    {v.outstationRoundTrip?.rate ?? "—"}
                  </p>
                </div>
                <div className="bg-slag text-ice p-2 text-center">
                  <p className="font-oswald uppercase text-[9px] tracking-wide text-ice/60 mb-0.5">One-Way</p>
                  <p className="font-oswald text-xs font-bold text-lichen">
                    {v.oneWayDrop?.rate ?? "—"}
                  </p>
                </div>
                <div className="bg-slag text-ice p-2 text-center">
                  <p className="font-oswald uppercase text-[9px] tracking-wide text-ice/60 mb-0.5">Bata</p>
                  <p className="font-oswald text-xs font-bold text-lichen">
                    {v.outstationRoundTrip?.bata ?? "—"}
                  </p>
                </div>
                <div className="bg-slag text-ice p-2 text-center">
                  <p className="font-oswald uppercase text-[9px] tracking-wide text-ice/60 mb-0.5">Avg/Day</p>
                  <p className="font-oswald text-xs font-bold text-lichen">
                    {v.outstationRoundTrip?.dailyAverage.replace(" km/day", "") ?? "—"}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slag/70 mb-4">{v.description}</p>

              <ul className="grid grid-cols-1 gap-1 mb-5 text-xs text-slag/80">
                {v.features.map((feature) => (
                  <li key={feature} className="inline-flex items-center gap-1.5">
                    <Check size={12} className="text-moss shrink-0" /> {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2">
                <ArrowFillButton
                  href={`/fleet#${v.slug}`}
                  btnText="View Details"
                  size="compact"
                  className="flex-1"
                />
                <Button asChild variant="secondary" size="icon" className="rounded-full">
                  <a
                    href={buildWhatsappUrl(
                      `Hello, I would like to enquire about booking the ${v.name} with Badiger Tours & Travels.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask about ${v.name} on WhatsApp`}
                  >
                    <MessageCircle />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={business.phoneHref} aria-label="Call us">
                    <Phone />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
