"use client"

import Hero from '../src/components/Hero'
import Services from '../src/components/Services'
import FeaturedProperties from '../src/components/FeaturedProperties'
import DeveloperShowcase from '../src/components/DeveloperShowcase'
import LeadForm from '../src/components/LeadForm'
import TeamShowcase from '../src/components/TeamShowcase'
import Awards from '../src/components/Awards'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProperties />
      <DeveloperShowcase />
      <LeadForm />
      <Awards />
      <TeamShowcase />
    </>
  )
}