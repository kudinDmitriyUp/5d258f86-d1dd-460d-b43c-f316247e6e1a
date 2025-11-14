"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Users, Shield, Clock, Scale, Briefcase, Package, Calculator, Star, TrendingUp, CheckCircle, ThumbsUp, MessageSquare, HelpCircle, Linkedin, Mail, Twitter } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="Sterling & Associates"
          button={{
            text: "Free Consultation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Expert Legal Counsel You Can Trust"
          description="Sterling & Associates provides premium legal services with integrity, expertise, and personalized attention to clients throughout Switzerland."
          tag="Premium Legal Services"
          tagIcon={Scale}
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "Our Services", href: "feature" }
          ]}
          imageSrc="https://pixabay.com/get/g89ac6259d97bd4a21809f70084fbfc14f3d391810f0b832ed506b8fd16bc80c0b478ac1f45373ad33f6d306e860b44176b22c19b67f447173f5802fbe3be6fcd_1280.jpg"
          imageAlt="Modern law office interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="With over three decades of combined experience, Sterling & Associates has established itself as a trusted legal partner for individuals and businesses across Switzerland."
          features={[
            {
              icon: Award,
              title: "Proven Excellence",
              description: "Our track record of successful cases and satisfied clients speaks to our commitment to achieving the best possible outcomes."
            },
            {
              icon: Users,
              title: "Client-Centered Approach",
              description: "We believe in building strong relationships with our clients, providing personalized attention and clear communication throughout every case."
            },
            {
              icon: Shield,
              title: "Comprehensive Protection",
              description: "From complex corporate matters to sensitive family issues, we provide thorough legal protection across all practice areas."
            },
            {
              icon: Clock,
              title: "Timely Resolution",
              description: "We understand the importance of swift action in legal matters and work efficiently to resolve your issues promptly."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Practice Areas"
          description="We provide comprehensive legal services across multiple practice areas with specialized expertise"
          tag="Legal Services"
          tagIcon={Briefcase}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Corporate Law",
              description: "Complete business legal services including mergers, acquisitions, contract negotiations, and corporate governance for companies of all sizes.",
              imageSrc: "https://pixabay.com/get/gfdb46ac740d5b6046cf2f0fdb1d9f0e1272d7ae5511f9c1114107e9a6ad0fa8d30ffe3fafa74435861a19193f12c3d6033be4036815ce6ec9833653af694b213_1280.jpg",
              imageAlt: "Corporate law services"
            },
            {
              id: "02",
              title: "Family Law",
              description: "Sensitive handling of divorce proceedings, child custody arrangements, adoption services, and prenuptial agreements with compassion and discretion.",
              imageSrc: "https://pixabay.com/get/g4d8192ec6224679744e4ee7de5561243587e8679adaf179b4fe453985496edd0d1e42e1d5ea6d9c6d210efec2f8691b0106be46d484edb34c28da625002d76ec_1280.jpg",
              imageAlt: "Family law consultation"
            },
            {
              id: "03",
              title: "Criminal Defense",
              description: "Aggressive defense representation for criminal charges with extensive courtroom experience and a deep understanding of Swiss criminal law.",
              imageSrc: "https://pixabay.com/get/gef7c5efa2e03edeed43e4c47a15e6f36d1bd9b678ff99acfb6de6b2442feee972f9c5ee44bd7694447f324c6949335727e99b4bc91f9c3fd2f139eec31fc8fc6_1280.jpg",
              imageAlt: "Criminal defense representation"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Legal Service Packages"
          description="Tailored legal solutions designed to meet your specific needs"
          tag="Service Options"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Sterling & Associates",
              name: "Business Formation Package",
              price: "CHF 2,500",
              rating: 5,
              reviewCount: "150+",
              imageSrc: "https://pixabay.com/get/gfdb46ac740d5b6046cf2f0fdb1d9f0e1272d7ae5511f9c1114107e9a6ad0fa8d30ffe3fafa74435861a19193f12c3d6033be4036815ce6ec9833653af694b213_1280.jpg",
              imageAlt: "Business formation services"
            },
            {
              id: "2",
              brand: "Sterling & Associates",
              name: "Family Mediation Service",
              price: "CHF 1,800",
              rating: 5,
              reviewCount: "200+",
              imageSrc: "https://pixabay.com/get/g4d8192ec6224679744e4ee7de5561243587e8679adaf179b4fe453985496edd0d1e42e1d5ea6d9c6d210efec2f8691b0106be46d484edb34c28da625002d76ec_1280.jpg",
              imageAlt: "Family mediation services"
            },
            {
              id: "3",
              brand: "Sterling & Associates",
              name: "Legal Consultation",
              price: "CHF 350/hr",
              rating: 5,
              reviewCount: "500+",
              imageSrc: "https://pixabay.com/get/g0e526aa2ec6c0e62add40ec71523d685f6ffee2ff14bd513bc9274ff1a4fdedc6469a3c4c84fdf5a664b4bf0c49ff331775ab0edfe0acd1740add4b626bb8d97_1280.jpg",
              imageAlt: "Legal consultation services"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Transparent Legal Fees"
          description="Clear, upfront pricing with no hidden costs"
          tag="Pricing"
          tagIcon={Calculator}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "consultation",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "CHF 350/hr",
              subtitle: "Initial consultation and ongoing legal advice",
              buttons: [
                { text: "Schedule Now", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "One-hour initial consultation",
                "Written legal assessment",
                "Action plan development",
                "Follow-up support",
                "Confidential discussion"
              ]
            },
            {
              id: "retainer",
              badge: "Best Value",
              badgeIcon: Shield,
              price: "CHF 5,000",
              subtitle: "Monthly retainer for ongoing legal support",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Contact Us", href: "contact" }
              ],
              features: [
                "20 hours monthly legal work",
                "Priority scheduling",
                "Document review included",
                "Phone and email support",
                "Reduced hourly rates"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Proven Track Record"
          description="Our success is measured by the results we achieve for our clients"
          tag="Our Success"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "30+",
              title: "Years",
              description: "Combined legal experience serving Swiss clients",
              icon: Award
            },
            {
              id: "2",
              value: "500+",
              title: "Cases",
              description: "Successfully resolved legal matters",
              icon: CheckCircle
            },
            {
              id: "3",
              value: "98%",
              title: "Success",
              description: "Client satisfaction rate",
              icon: ThumbsUp
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Legal Team"
          description="Experienced attorneys dedicated to achieving the best outcomes for our clients"
          tag="Our Attorneys"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "James Sterling",
              role: "Managing Partner",
              description: "Over 15 years of experience in corporate law and business transactions. Specializes in mergers, acquisitions, and complex commercial litigation.",
              imageSrc: "https://pixabay.com/get/gafb5c3c4a87b2fa4bc22c17ca2e80f69b041c5510de3d81b4af86fc84afeacc9f189db0c09f373379e290d7f40135187fa17a2c552bdd705375c590e76ee6bea_1280.jpg",
              imageAlt: "James Sterling, Managing Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/jamessterling" },
                { icon: Mail, url: "mailto:james@sterling-associates.ch" }
              ]
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Senior Associate",
              description: "Specializes in family law and estate planning with a compassionate approach to sensitive legal matters. Fluent in German, French, and English.",
              imageSrc: "https://pixabay.com/get/g32fffe95cad474a2d9dbaa493b0b782924fa3f375bdcc322c1d0796a0a81c852733b0284cd8158eb4776b1c6109711f71207a7a684ae78a74a8579cc722362c7_1280.jpg",
              imageAlt: "Sarah Mitchell, Senior Associate",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarahmitchell" },
                { icon: Mail, url: "mailto:sarah@sterling-associates.ch" }
              ]
            },
            {
              id: "3",
              name: "Robert Chen",
              role: "Criminal Defense Attorney",
              description: "Former prosecutor with extensive criminal law experience. Known for meticulous case preparation and aggressive courtroom advocacy.",
              imageSrc: "https://pixabay.com/get/gfe220f562cb3fc73fd459a54849a39c0f21d4d6f93d51fffb3df5695ed7f950d68676ec20f6d803cffcc848607f49a66cc9361dce51dd0d287bf7c18d4c3bbc3_1280.jpg",
              imageAlt: "Robert Chen, Criminal Defense Attorney",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/robertchen" },
                { icon: Mail, url: "mailto:robert@sterling-associates.ch" }
              ]
            },
            {
              id: "4",
              name: "Elena Dubois",
              role: "Associate Attorney",
              description: "Rising star in immigration and international law. Provides comprehensive legal support for individuals and businesses navigating Swiss immigration processes.",
              imageSrc: "https://pixabay.com/get/g58ac43632d98e8079ded6e45d2751afa191b391b4918fbf2281e45a9cf5b4120462857f901b342f3265ff6606f6e84f1ab7e305ab8466eb7514a1531c279cbbe_1280.jpg",
              imageAlt: "Elena Dubois, Associate Attorney",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/elenadubois" },
                { icon: Mail, url: "mailto:elena@sterling-associates.ch" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Client Testimonials"
          description="Hear from clients who have experienced our dedicated legal representation"
          tag="Client Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Weber",
              role: "CEO",
              company: "Weber Technologies AG",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g1f7d6cff80a3cbc68a786004f3edf0ae103407d2789a20ba9287454ec5bf2af58368025e0e8f4bf48afd4b59f5405056d48bc9b5e0e68aa90780ff5952257ee7_1280.jpg",
              imageAlt: "Michael Weber testimonial"
            },
            {
              id: "2",
              name: "Anna Müller",
              role: "Business Owner",
              company: "Müller Consulting",
              rating: 5,
              imageSrc: "https://pixabay.com/get/geb27e5794ff22787adcc67e9ee0eb873ce8c99e2d63f090c38fd919a2572fc2c28324734bb7527e83fc2892f8612c5668a2e88613989cbfe4b26f562b900955e_1280.jpg",
              imageAlt: "Anna Müller testimonial"
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Managing Director",
              company: "Thompson International",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g68ff2666a4ec939fba63790e04111828418448ca0151afa1af49ddaee38ef823400d5b4d0fca68dcae637894432770191c13c3bc1e9cd8a8cd61374108654b76_1280.jpg",
              imageAlt: "David Thompson testimonial"
            },
            {
              id: "4",
              name: "Lisa Zimmermann",
              role: "Private Client",
              company: "Family Law Matter",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge77f5b2884fe03792a5e138f5de76299c9c9e720eca7749e3150567d2dc10b01f9b7f4d18107ff82954c21e4f31646161f8d46600492f3e951400270f50dfcf8_1280.jpg",
              imageAlt: "Lisa Zimmermann testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized by Leading Legal Organizations"
          description="Our firm is proud to be affiliated with prestigious legal associations"
          tag="Professional Memberships"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g44089476c159148a81973911e57b4d872d243bdead706cf443372b36aa745f26738c940687e7fe4af18fb8018e326bbd693468dc8c74fde2cfb5bc618aa392c8_1280.jpg",
            "https://pixabay.com/get/g47a0ce9dadc9e358f0fbad640944be5c83105004c1b1911ace74c7c7d2e208e954a9ba957a96218c3c98bb7963bf248f554846d8ee2e7c1fc9b082c0c7d2e448_1280.jpg",
            "https://pixabay.com/get/gc635236dd3088d4d1f1fdc5ca25c430e52cab1f03cbb9dffd32324db9fa7445cb7837e1a0c7e757f7d66945a88c2c9b4b60a3f90b7140ead94e72329e54b46b5_1280.jpg",
            "https://pixabay.com/get/g967fc550e20a8458e6d4e919600fcb8aa979ce40414a93ce60944495a0b68d2f8185b887b499b00ad239d6e9ca9dd40b638e69fb2ea773c4cd7e13d42305326b_1280.jpg",
            "https://pixabay.com/get/ga56cf1a15c86a14ffe12e5c2226583ef77034d961088e61bed7d7ededae34270874edacc9bd8bb0a39fc132427cc834c4c432fb92e5711362970fc8853213e0c_1280.jpg",
            "https://pixabay.com/get/g46e837e699238867dcdd097372249c7353611776255956371513768ade62323432593d655054a6835b96cb520bbdd1fe5c4b6f905d90f5ff880e0913c382e3a6_1280.jpg",
            "https://pixabay.com/get/g53cc2dd5cbf00aa42ade4a901747d155c593d078943f71f98cdee1c2efff6c79ac518380407b315b8666846dbdace69eedaca78329655b7c865f7549890caab9_1280.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about our legal services and processes"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do I schedule a consultation?",
              content: "You can schedule a consultation by calling our office at +41 44 123 4567, emailing us at info@sterling-associates.ch, or using our online contact form. We typically respond within 24 hours to schedule your appointment."
            },
            {
              id: "2",
              title: "What are your consultation fees?",
              content: "Our initial consultation fee is CHF 350 per hour. This includes a comprehensive review of your legal matter, written assessment, and recommended action plan. The consultation fee is applied toward any retainer if you decide to engage our services."
            },
            {
              id: "3",
              title: "Do you handle cases in languages other than English?",
              content: "Yes, our team is multilingual and can provide legal services in German, French, Italian, and English. We understand the importance of clear communication in legal matters and ensure you fully understand all aspects of your case."
            },
            {
              id: "4",
              title: "How long does a typical case take?",
              content: "The duration varies significantly depending on the complexity of the matter. Simple contract reviews may take days, while complex litigation can take months or years. During our consultation, we'll provide a realistic timeline for your specific case."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept bank transfers, credit cards, and checks. For larger matters, we offer flexible payment arrangements including monthly retainers and installment plans. All fees are discussed transparently before beginning work on your case."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Sterling & Associates"
          copyrightText="© 2025 Sterling & Associates. All rights reserved."
          columns={[
            {
              title: "Practice Areas",
              items: [
                { label: "Corporate Law", href: "feature" },
                { label: "Family Law", href: "feature" },
                { label: "Criminal Defense", href: "feature" },
                { label: "Immigration Law", href: "feature" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Team", href: "team" },
                { label: "About Us", href: "about" },
                { label: "Testimonials", href: "testimonial" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Legal News", href: "#" },
                { label: "Case Studies", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Schedule Consultation", href: "contact" },
                { label: "+41 44 123 4567", href: "tel:+41441234567" },
                { label: "info@sterling-associates.ch", href: "mailto:info@sterling-associates.ch" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com/company/sterling-associates", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com/sterling_law", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:info@sterling-associates.ch", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}