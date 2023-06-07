export default function Header() {
  return (
    <div className="flex justify-between items-center container px-8 lg:px-28 py-5">
      <a href="https://algobash-test-imdadu.netlify.app/" className="cursor-pointer">
        <img src="/logo.svg" alt="logo"/>
      </a>
      <button onClick={() => alert('coming soon')}>
        <img src="/burger.svg" alt="burger"/>
      </button>
    </div>
  )
}
