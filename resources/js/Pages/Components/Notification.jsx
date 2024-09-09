import { useAnimate, stagger } from "framer-motion"
import { animate } from "framer-motion/dom"


const Notification = () =>  {

    // animate("section", { opacity: 1 }, { delay: stagger(0.1) })
    // stagger(0.1, { from: "center" })
    // stagger(0.1, { ease: [.32, .23, .4, .9] })



    return (
        <section class="bg-blue-100 absolute hidden w-60 right-10 top-20  border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white" role="alert" tabindex="-1" aria-labelledby="hs-actions-label">
                <div class="flex">
                    <div class="shrink-0">
                    <svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                    </svg>
                    </div>
                    <div class="ms-3">
                    <h3 id="hs-actions-label" class="font-semibold">
                        YouTube would like you to send notifications
                    </h3>
                    <div class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
                    </div>
                    <div class="mt-4">
                        <div class="flex gap-x-3">
                        <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                            Don't allow
                        </button>
                        <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                            Allow
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
    )
}

export default Notification