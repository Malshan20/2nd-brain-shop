"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { CheckCircle, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-green-100 dark:border-green-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">StudyPlanner</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Thank You Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-green-200 dark:border-green-800 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-6">
                <CheckCircle className="w-20 h-20 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-3xl text-gray-900 dark:text-white mb-4">
                Thank You for Your Purchase!
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                Your order has been successfully processed
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Check Your Email</h3>
                </div>
                <p className="text-green-700 dark:text-green-300 text-center">
                  You will receive an email with the PDF attached within the next few minutes.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">What happens next?</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Check your email inbox for the download link</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Download your Digital Study Planner & Journal PDF
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Start organizing your studies and achieving your goals!
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Need help? Contact us at support@studyplanner.com
                </p>
                <Link href="/">
                  <Button variant="outline" className="border-green-200 dark:border-green-800 bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
