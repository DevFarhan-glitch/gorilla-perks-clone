import { useForm, ValidationError } from "@formspree/react";
import { Loader2, Send } from "lucide-react";
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
                  <Input placeholder="07123 456789" {...field} />
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
        <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
          {state.submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
