import { useForm, ValidationError } from "@formspree/react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  service_interest: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultService?: string;
}

const ContactForm = ({ defaultService }: ContactFormProps) => {
  const { toast } = useToast();
  // Formspree hook: Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  const form = useHookForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service_interest: defaultService || "",
      message: "",
    },
  });

  // Handle Formspree success state
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your enquiry. We'll be in touch within 24 hours.",
      });
      form.reset();
    }
  }, [state.succeeded, toast, form]);

  // Handle Formspree errors
  useEffect(() => {
    if (state.errors) {
       toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  }, [state.errors, toast]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-sm" />
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
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="07123 456789" {...field} />
                </FormControl>
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-sm" />
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
                <ValidationError prefix="Company" field="company" errors={state.errors} className="text-destructive text-sm" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service_interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interest</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="contractor">Contractor Accounting</SelectItem>
                  <SelectItem value="small-business">Small Business Accounting</SelectItem>
                  <SelectItem value="landlord">Landlord Services</SelectItem>
                  <SelectItem value="other">Other / General Enquiry</SelectItem>
                </SelectContent>
              </Select>
              <ValidationError prefix="Service" field="service_interest" errors={state.errors} className="text-destructive text-sm" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  className="min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm" />
              <FormMessage />
            </FormItem>
          )}
        />

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
