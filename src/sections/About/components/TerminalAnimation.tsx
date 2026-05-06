import { AnimatedSpan, Terminal, TypingAnimation } from '../../../components/ui/terminal'

const TerminalAnimation = () => {
  return (
    <Terminal className="bg-transparent grid-2 max-w-4xl">
      <TypingAnimation duration={0}>rei@Alradenn-MacBook ~ % whoami</TypingAnimation>

      <AnimatedSpan className="text-green-500">&gt; Checking Personality...</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Position: Software Engineer</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Status: Available worldwide</AnimatedSpan>

      <TypingAnimation className="text-wrap">
        Hello! I'm a dev who works while the world sleeps (or wakes). Ready to join your team no
        matter the coordinates.
      </TypingAnimation>

      <TypingAnimation duration={0}>rei@Alradenn-MacBook ~ %</TypingAnimation>
    </Terminal>
  )
}
export default TerminalAnimation
