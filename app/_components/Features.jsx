import { BellRing, CalendarDays, Clock, Settings, UserPlus2Icon, Watch } from 'lucide-react'
import React from 'react'

function Features() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Schedule Your Meetings Efficiently & Many More</h2>

            <p className="mt-4 text-gray-300">
              Powerful Tools to Streamline Meeting Scheduling and Boost Collaboration
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Clock/>

              <h2 className="mt-4 text-xl font-bold text-white">Automated Scheduling</h2>

              <p className="mt-1 text-sm text-gray-300">
                Smart tools to automatically find the best time for meetings.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <CalendarDays/>

              <h2 className="mt-4 text-xl font-bold text-white">Calendar Sync</h2>

              <p className="mt-1 text-sm text-gray-300">
                Connect your Google, Outlook, and other calendars.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <BellRing/>

              <h2 className="mt-4 text-xl font-bold text-white">Reminders</h2>

              <p className="mt-1 text-sm text-gray-300">
                Get notified so you never miss a meeting.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Settings/>

              <h2 className="mt-4 text-xl font-bold text-white">Customizable Settings</h2>

              <p className="mt-1 text-sm text-gray-300">
                Customize meeting reminders, time zones, and availability to suit your team's preferences and needs.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Watch/>

              <h2 className="mt-4 text-xl font-bold text-white">Time Zone Compatibility</h2>

              <p className="mt-1 text-sm text-gray-300">
                Automatically adjust meeting times based on the time zones of all participants, making global meetings easier.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <UserPlus2Icon/>

              <h2 className="mt-4 text-xl font-bold text-white">Team Collaboration</h2>

              <p className="mt-1 text-sm text-gray-300">
                Integrated group chats and polls to gather feedback, ensuring that meetings run smoothly and decisions are made efficiently.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-zinc-300 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features