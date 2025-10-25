"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart3, Code, HelpCircle, Heart, MessageCircle, Palette, Rocket, Sparkles, Target, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Results", id: "metrics" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CreativeFlow"
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Amplify Your Brand's Digital Presence"
          description="We create compelling marketing strategies that drive results. From brand identity to digital campaigns, we help businesses connect with their audience and achieve measurable growth."
          tag="Marketing Agency"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "View Our Work", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A diverse group of young professionals collaborating around a laptop in a modern office setting. Perfect for business or tech concepts."
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive marketing solutions tailored to your business goals and target audience"
          tag="What We Do"
          tagIcon={Target}
          features={[
            {
              title: "Brand Identity Design",
              description: "Create memorable brand experiences with professional logo design, visual identity systems, and brand guidelines that resonate with your target market.",
              icon: Palette,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Digital Marketing",
              description: "Drive qualified traffic and conversions with data-driven SEO, social media marketing, and paid advertising campaigns across all major platforms.",
              icon: TrendingUp,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Web Development",
              description: "Build responsive, high-converting websites that provide exceptional user experiences and support your marketing objectives with modern technology.",
              icon: Code,
              button: { text: "Learn More", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About CreativeFlow"
          description="We're a team of creative strategists, designers, and marketers passionate about helping businesses tell their story and connect with their audience through compelling digital experiences."
          tag="Our Story"
          tagIcon={Users}
          bulletPoints={[
            {
              title: "Strategic Approach",
              description: "Data-driven strategies that align with your business objectives and market opportunities",
              icon: Target
            },
            {
              title: "Creative Excellence",
              description: "Award-winning design and creative solutions that capture attention and drive engagement",
              icon: Award
            },
            {
              title: "Proven Results",
              description: "Track record of delivering measurable growth for clients across diverse industries",
              icon: TrendingUp
            }
          ]}
          buttons={[
            { text: "Our Process", href: "contact" },
            { text: "Meet the Team", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7661215/pexels-photo-7661215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Close-up of 'shop small' handwritten on white paper. Ideal for small business or shop promotions."
          imagePosition="right"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Results That Matter"
          description="We measure success through the growth and achievements of our clients"
          tag="Success Metrics"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "150",
              title: "plus",
              description: "Successful campaigns launched",
              icon: Rocket
            },
            {
              id: "2",
              value: "89",
              title: "percent",
              description: "Client satisfaction rate",
              icon: Heart
            },
            {
              id: "3",
              value: "2.5",
              title: "million",
              description: "Total reach generated",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses that have transformed their marketing with our help"
          tag="Client Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechStart Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990046/pexels-photo-5990046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Brand Manager",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Creative Director",
              company: "BrandWorks",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, process, and approach"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What services do you offer?",
              content: "We provide comprehensive marketing services including brand identity design, digital marketing campaigns, web development, social media management, and strategic consulting tailored to your business needs."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. Brand identity projects typically take 4-6 weeks, while web development can range from 6-12 weeks. We'll provide detailed timelines during our initial consultation."
            },
            {
              id: "3",
              title: "Do you work with small businesses?",
              content: "Absolutely! We work with businesses of all sizes, from startups to established enterprises. Our scalable solutions are designed to grow with your business and budget requirements."
            },
            {
              id: "4",
              title: "What's your approach to measuring results?",
              content: "We use data-driven metrics tailored to your goals, including website traffic, conversion rates, brand awareness, engagement rates, and ROI. Regular reporting keeps you informed of progress and results."
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Close-up of hands typing on a laptop and reviewing business documents, focused on finance and legal tasks."
          mediaPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Marketing?"
          description="Let's discuss your project and create a customized strategy that drives real results for your business. Get in touch with our team today."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project and goals...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Brand Design", href: "services" },
                { label: "Digital Marketing", href: "services" },
                { label: "Web Development", href: "services" },
                { label: "Strategy Consulting", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Process", href: "contact" },
                { label: "Case Studies", href: "contact" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Blog", href: "contact" },
                { label: "Marketing Tips", href: "contact" },
                { label: "Industry Insights", href: "contact" },
                { label: "FAQs", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 CreativeFlow Marketing Agency. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}