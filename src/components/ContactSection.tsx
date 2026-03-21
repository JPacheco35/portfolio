// Contact Section & Social Links at the bottom of the page

import { type FormEvent, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import SocialCard from "@/components/SocialCard.tsx";


// am i looking for new work/jobs? --> display green pill
const isLookingForOpportunities = true

// used for fromspree.io integration
const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

// current state of the contact form
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {

  // track current state of the contact form
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  // status message to display after form submission
  const [statusMessage, setStatusMessage] = useState('')

  // socials links for display
  const links = [
    {
      href: 'https://github.com/JPacheco35',
      label: 'GitHub',
      value: 'github.com/JPacheco35',
      icon: Github,
    },
    {
      href: 'https://linkedin.com/in/johnpacheco347',
      label: 'LinkedIn',
      value: 'linkedin.com/in/johnpacheco347',
      icon: Linkedin,
    },
    {
      href: 'mailto:johnpacheco347@gmail.com',
      label: 'Email',
      value: 'johnpacheco347@gmail.com',
      icon: Mail,
    },
  ]

  // form submission handler
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // error: no formspree configured
    if (!contactEndpoint) {
      setSubmitState('error')
      setStatusMessage('Contact form endpoint is not configured yet.')
      return
    }

    // get form data
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    setSubmitState('submitting')
    setStatusMessage('Sending message...')

    // POST to formspree.io
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // error on formspree side
      if (!response.ok) {
        setSubmitState('error')
        setStatusMessage('Could not send message. Please try again in a moment.')
        return
      }

      // success
      setSubmitState('success')
      setStatusMessage('Message sent successfully. Thanks for reaching out!')
      form.reset()
    }
    // error on client side
    catch (error) {
      setSubmitState('error',)
      console.error('Error sending message:', error)
      setStatusMessage('Could not send message. Please try again in a moment.')
    }
  }

  return (
    <section id="contact" className="container-max py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15">

          {/*looking for work green pill*/}
          <CardHeader className="gap-3">
            {isLookingForOpportunities ? (
                <div className="mb-2 flex justify-center">
                  <Badge
                      variant="opportunity"
                      className={`px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-700 ${'translate-y-0 opacity-100'}`}
                  >
                    Open to Opportunities
                  </Badge>
                </div>
            ) : null}
            <CardTitle className="gradient-text text-3xl">Send me a message</CardTitle>
            <p className="text-slate-300">
              Fill out the form and I'll get back to you as I can.
            </p>
          </CardHeader>

          {/*contact form*/}
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>

              {/*sender name*/}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="John Doe"
                  className="h-10 w-full rounded-md border border-blue-400/25 bg-slate-900/60 px-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                />
              </div>

              {/*email address*/}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="johndoe@example.com"
                  className="h-10 w-full rounded-md border border-blue-400/25 bg-slate-900/60 px-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                />
              </div>

              {/*subject*/}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-200">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry"
                  className="h-10 w-full rounded-md border border-blue-400/25 bg-slate-900/60 px-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                />
              </div>

              {/*message*/}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="I&apos;d like to discuss a project opportunity..."
                  className="w-full rounded-md border border-blue-400/25 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                />
              </div>

              {/*submit button*/}
              <Button type="submit" className="w-full gap-2" disabled={submitState === 'submitting'}>
                {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send className="h-4 w-4" />
              </Button>

              {/*display status message if it exists*/}
              {statusMessage ? (
                <p
                  aria-live="polite"
                  className={cn(
                    'text-sm',
                    submitState === 'success' ? 'text-emerald-300'
                      : submitState === 'submitting'
                        ? 'text-slate-300'
                        : 'text-rose-300'
                  )}
                >
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>

        {/*socials card*/}
        <Card className="transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15">

          {/*header*/}
          <CardHeader className="gap-3">
            <CardTitle className="text-3xl text-slate-100">Connect with me</CardTitle>
            <p className="text-slate-300">
              You can also reach out to me directly through these channels.
            </p>
          </CardHeader>

          {/*socials card*/}
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {links.map((link) => (<SocialCard key={link.label} link={link} />))}
            </div>

            {/*location info*/}
            <div className="pt-4">
              <h4 className="text-2xl font-semibold text-slate-100">Current Location</h4>
              <p className="mt-2 flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                Greater Orlando Area, Florida, USA
              </p>
            </div>
        </CardContent>
        </Card>
      </div>
    </section>
  )
}