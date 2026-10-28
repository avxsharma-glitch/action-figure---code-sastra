'use client'

import { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type ModalView = 'hint' | 'timer'
type ChallengeStatus = 'idle' | 'running' | 'success' | 'expired'

const CHALLENGE_DURATION_SECONDS = 30 * 60

export function TreasureHunt() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalView, setModalView] = useState<ModalView>('hint')
  const [remainingSeconds, setRemainingSeconds] = useState(
    CHALLENGE_DURATION_SECONDS,
  )
  const [challengeStatus, setChallengeStatus] =
    useState<ChallengeStatus>('idle')
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (challengeStatus !== 'running') {
      return
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((currentSeconds) =>
        currentSeconds > 0 ? currentSeconds - 1 : 0,
      )
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [challengeStatus])

  useEffect(() => {
    if (challengeStatus === 'running' && remainingSeconds === 0) {
      setChallengeStatus('expired')
      setFeedback("Time's up! Challenge failed.")
    }
  }, [challengeStatus, remainingSeconds])

  const openHint = () => {
    setModalView('hint')
    setIsOpen(true)
  }

  const startChallenge = () => {
    if (challengeStatus === 'idle') {
      setChallengeStatus('running')
    }
    setModalView('timer')
    setIsOpen(true)
  }

  const submitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (challengeStatus !== 'running') {
      return
    }

    const normalizedAnswer = answer.trim().toLowerCase()
    if (normalizedAnswer === 'github' || normalizedAnswer === 'git') {
      setChallengeStatus('success')
      setFeedback('Correct! You found the hidden treasure.')
      return
    }

    setFeedback('Not quite. Keep searching and try again.')
  }

  const minutes = Math.floor(remainingSeconds / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (remainingSeconds % 60).toString().padStart(2, '0')

  return (
    <>
      <button
        type="button"
        onClick={openHint}
        aria-label="Open treasure hunt hint"
        className="fixed bottom-5 left-5 z-[60] flex size-12 items-center justify-center rounded-full border border-transformers-red/40 bg-charcoal text-2xl shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:border-transformers-red focus-visible:ring-2 focus-visible:ring-transformers-red focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <span aria-hidden="true">💡</span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-transformers-red/30 bg-charcoal text-ivory sm:max-w-xl">
          {modalView === 'hint' ? (
            <>
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="font-mono text-xl uppercase tracking-wider text-transformers-red">
                  Hidden Treasure Hunt
                </DialogTitle>
                <DialogDescription className="text-metal">
                  Read closely. The smallest details may point the way.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 font-mono text-sm leading-7 text-ivory/90">
                <p>
                  Raaz ki talaash mein nikle ho, toh nazrein khuli rakhna,
                  <br />
                  Har khamosh nishaani ko apni diary mein likhna.
                </p>
                <p>
                  Na koi naksha milega, na koi seedha raasta,
                  <br />
                  Chhoti si galti mein chhupa hai jeet ka vaasta.
                </p>
                <p>
                  Jahan sab kuch sahi lage, wahin sawaal uthana,
                  <br />
                  Jo dikhta hai saamne, zaroori nahi wahi sach maana.
                </p>
                <p>
                  Kuch nishaan purane hain, kuch abhi banaye gaye,
                  <br />
                  Kuch darwaaze khule hain, kuch sirf dikhaye gaye.
                </p>
                <p>
                  Har mod pe ek paheli, har kadam pe imtihaan,
                  <br />
                  Dimaag tumhara hathiyaar hai, observation tumhari jaan.
                </p>
                <p>
                  Na naam bataunga, na jagah ka pata,
                  <br />
                  Khud dhoondh kar dikhao, kitna tez hai tumhara dimaag zara.
                </p>
                <p>
                  Jab aakhri clue mile aur saare parde hat jaayein,
                  <br />
                  Tab samajhna, asli hunters apni manzil paayein.
                </p>
                <p className="font-semibold text-transformers-red">
                  Clue chhupa hai nazron se pare,
                  <br />
                  Khazana milega use jo soche zara gehre.
                </p>
              </div>

              <Button
                type="button"
                onClick={startChallenge}
                className="w-full bg-transformers-red text-ivory hover:bg-transformers-red/90"
              >
                Start Challenge
              </Button>
            </>
          ) : (
            <>
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="font-mono text-xl uppercase tracking-wider text-transformers-red">
                  Treasure Hunt Challenge
                </DialogTitle>
                <DialogDescription className="text-metal">
                  Submit the hidden keyword before the countdown ends.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5">
                <p
                  aria-live="polite"
                  className="text-center font-mono text-5xl font-bold tabular-nums text-ivory"
                >
                  {minutes}:{seconds}
                </p>

                <form onSubmit={submitAnswer} className="space-y-3">
                  <label
                    htmlFor="treasure-answer"
                    className="font-mono text-sm text-metal"
                  >
                    Your answer
                  </label>
                  <input
                    id="treasure-answer"
                    type="text"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    disabled={challengeStatus !== 'running'}
                    autoComplete="off"
                    className="h-10 w-full rounded-md border border-metal/40 bg-black/30 px-3 font-mono text-ivory outline-none transition-colors placeholder:text-metal/60 focus:border-transformers-red focus:ring-2 focus:ring-transformers-red/40 disabled:cursor-not-allowed disabled:opacity-60"
                    placeholder="Enter the keyword"
                  />
                  <Button
                    type="submit"
                    disabled={challengeStatus !== 'running'}
                    className="w-full bg-transformers-red text-ivory hover:bg-transformers-red/90"
                  >
                    Submit Answer
                  </Button>
                </form>

                {feedback && (
                  <p
                    aria-live="assertive"
                    className={`text-center font-mono text-sm ${
                      challengeStatus === 'success'
                        ? 'text-green-400'
                        : 'text-transformers-red'
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
