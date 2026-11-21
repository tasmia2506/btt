"use client";

import type { ReactNode } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@/data/reviews";

export default function ReviewsCarousel({
  reviews,
  header,
}: {
  reviews: Review[];
  header?: ReactNode;
}) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        {header}
        <div className="flex gap-3">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </div>
      <CarouselContent className="-ml-4">
        {reviews.map((review) => (
          <CarouselItem key={review.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
            <Card className="h-full rounded-lg">
              <CardContent className="flex h-full flex-col px-6 py-6">
                <Quote size={22} className="text-lichen mb-4" />
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.rating ? "text-moss fill-moss" : "text-stone/30 fill-stone/30"}
                    />
                  ))}
                </div>
                <p className="text-sm text-slag/80 mb-5 flex-1">{review.text}</p>
                <div className="pt-4 border-t border-stone/20">
                  <p className="font-oswald uppercase font-bold text-slag text-sm">{review.name}</p>
                  <p className="text-xs text-stone">{review.trip}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
