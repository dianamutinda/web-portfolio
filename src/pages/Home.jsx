import Button from "../components/ui/Button"

function Home() {
  return (
    <main className="p-10">
      <div className="flex gap-6">
        <Button>
          Book a discovery call
        </Button>

        <Button variant="secondary">
          View my work
        </Button>

        <Button variant="ghost">
          Learn more
        </Button>

        <Button variant="text">
          Contact me
        </Button>
      </div>
    </main>
  )
}

export default Home