import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'

const Header: FunctionalComponent = () => {
  return (
    <header class="bg-purple-700 w-full flex text-white justify-between p-4 items-center shadow-lg">
      <h1 class="text-2xl">Preact App</h1>
      <nav class="flex space-x-4">
        <Link
          activeClassName="text-gray-300"
          class="hover:text-gray-400"
          href="/"
        >
          Home
        </Link>
        <Link
          activeClassName="text-gray-300"
          class="hover:text-gray-400"
          href="/profile"
        >
          Me
        </Link>
        <Link
          activeClassName="text-gray-300"
          class="hover:text-gray-400"
          href="/profile/john"
        >
          John
        </Link>
      </nav>
    </header>
  )
}

export default Header
