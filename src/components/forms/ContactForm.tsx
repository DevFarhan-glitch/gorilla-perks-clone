import { useForm, ValidationError } from "@formspree/react";
import { Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

/* ------------------ Schema ------------------ */
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  service_interest: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* ------------------ Props ------------------ */
interface ContactFormProps {
  selectedPlan?: string | null;
}

/* ------------------ Component ------------------ */
const ContactForm = ({ selectedPlan }: ContactFormProps) => {
  const { toast } = useToast();

  // 🔁 Replace with your real Formspree ID
  const [state, handleSubmit] = useForm("xlgrryne");

  const form = useHookForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service_interest: selectedPlan || "",
      message: selectedPlan
        ? `I'm interested in the ${selectedPlan} package.`
        : "",
    },
  });

  // Watch field values in real-time to calculate completion progress
  const nameValue = form.watch("name") || "";
  const emailValue = form.watch("email") || "";
  const messageValue = form.watch("message") || "";

  const isNameFilled = nameValue.trim().length > 0;
  const isEmailFilled = emailValue.trim().includes("@") && emailValue.trim().length > 4;
  const isMessageFilled = messageValue.trim().length > 0;

  let progress = 0;
  if (isNameFilled) progress += 33;
  if (isEmailFilled) progress += 33;
  if (isMessageFilled) progress += 34;

  /* ------------------ Success Handling ------------------ */
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your enquiry. We'll contact you shortly.",
      });
      form.reset();
    }
  }, [state.succeeded, toast, form]);

  /* ------------------ Error Handling ------------------ */
  useEffect(() => {
    if (state.errors) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  }, [state.errors, toast]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Progress Bar */}
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl transition-all duration-300">
          <div className="flex justify-between items-center text-sm font-bold text-navy mb-2">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-gold animate-pulse" />
              Form Completion Progress
            </span>
            <span className="text-gold font-mono">{progress}%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
                </FormControl>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone & Company */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+44 7949 956279" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Ltd" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Selected Package (Readonly) */}
        {selectedPlan && (
          <div>
            <FormLabel>Selected Package</FormLabel>
            <Input
              value={selectedPlan}
              readOnly
              className="bg-muted cursor-not-allowed"
            />
          </div>
        )}

        {/* Service Interest */}
        <FormField
          control={form.control}
          name="service_interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interest</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={!!selectedPlan}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Basic">Basic Package</SelectItem>
                  <SelectItem value="Essentials">Essentials Package</SelectItem>
                  <SelectItem value="Advanced">Advanced Package</SelectItem>
                  <SelectItem value="Other">Other / General Enquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message *</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[120px] resize-none"
                  placeholder="Tell us about your requirements..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full h-14 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl py-6 text-base transition-all duration-300 shadow-[0_5px_15px_rgba(202,169,87,0.2)] hover:shadow-[0_8px_25px_rgba(202,169,87,0.45)] hover:scale-[1.01] flex items-center justify-center gap-2 group cursor-pointer border-0"
          disabled={state.submitting}
        >
          {state.submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
