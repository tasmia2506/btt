"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { business, buildWhatsappUrl } from "@/config/business";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tripTypes = ["Local sightseeing", "Outstation round trip", "One-way drop"] as const;
const vehicleOptions = ["Dzire", "Etios", "Ertiga", "Innova Crysta", "No preference"] as const;

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return /^[+0-9\s-]{7,20}$/.test(value) && digits.length >= 7 && digits.length <= 15;
    }, "Enter a valid phone number."),
  pickup: z.string().trim().min(1, "Pickup location is required."),
  destination: z.string().trim().min(1, "Destination is required."),
  date: z.string().min(1, "Travel date is required."),
  returnDate: z.string().optional(),
  tripType: z.enum(tripTypes, { error: "Select a trip type." }),
  vehicle: z.enum(vehicleOptions),
  passengers: z.string().optional(),
  notes: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema, undefined, { mode: "sync" }),
    defaultValues: {
      name: "",
      phone: "",
      pickup: "",
      destination: "",
      date: "",
      returnDate: "",
      tripType: undefined,
      vehicle: "No preference",
      passengers: "",
      notes: "",
    },
  });

  function submitToWhatsapp(values: BookingValues, popup: Window | null) {
    const message = [
      `Hello ${business.name},`,
      "",
      "I would like to enquire about a cab booking.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Pickup: ${values.pickup}`,
      `Destination: ${values.destination}`,
      `Travel Date: ${values.date}`,
      `Return Date: ${values.returnDate || "-"}`,
      `Trip Type: ${values.tripType}`,
      `Preferred Vehicle: ${values.vehicle}`,
      `Passengers: ${values.passengers || "-"}`,
      `Additional Requirements: ${values.notes || "-"}`,
      "",
      "Please share the details and availability.",
    ].join("\n");

    if (popup) {
      popup.location.href = buildWhatsappUrl(message);
    } else {
      window.open(buildWhatsappUrl(message), "_blank");
    }
  }

  function triggerSubmit() {
    // Open the tab synchronously, in the same click/submit event, so browser
    // popup blockers (Safari in particular) don't treat the later
    // async-validated redirect as an unsolicited popup.
    const popup = window.open("", "_blank");
    form.handleSubmit(
      (values) => submitToWhatsapp(values, popup),
      () => popup?.close()
    )();
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    triggerSubmit();
  }

  function handleSubmitButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    triggerSubmit();
  }

  const labelClass = "text-xs uppercase tracking-wide font-oswald font-semibold text-slag";

  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="grid gap-5 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Full Name *</FormLabel>
              <FormControl>
                <Input {...field} className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Phone Number *</FormLabel>
              <FormControl>
                <Input {...field} className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pickup"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Pickup Location *</FormLabel>
              <FormControl>
                <Input {...field} className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Destination *</FormLabel>
              <FormControl>
                <Input {...field} className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Travel Date *</FormLabel>
              <FormControl>
                <Input {...field} type="date" className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="returnDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Return Date (optional)</FormLabel>
              <FormControl>
                <Input {...field} type="date" className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tripType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Trip Type *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-ice">
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {tripTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vehicle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Preferred Vehicle</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-ice">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {vehicleOptions.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passengers"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Number of Passengers (optional)</FormLabel>
              <FormControl>
                <Input {...field} className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel className={labelClass}>Additional Requirements (optional)</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} className="bg-ice" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="sm:col-span-2">
          <ArrowFillButton
            href="#"
            btnText="Send Enquiry on WhatsApp"
            onClick={handleSubmitButtonClick}
          />
          <p className="text-xs text-stone mt-3">
            This sends an enquiry only. Your booking is confirmed once our team responds.
          </p>
        </div>
      </form>
    </Form>
  );
}
