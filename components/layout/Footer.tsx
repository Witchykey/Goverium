import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Civicera
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Empowering communities through transparent civic engagement and accessible public information.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/meetings" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Public Meetings
                </Link>
              </li>
              <li>
                <Link 
                  href="/agendas" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Meeting Agendas
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@civicera.org" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Civicera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
