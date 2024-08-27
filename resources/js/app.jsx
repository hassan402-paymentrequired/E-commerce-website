import './bootstrap';
import '../css/app.css'
import '@radix-ui/themes/styles.css';


import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <NextUIProvider>

        <App {...props} />
      </NextUIProvider>
  )
  },
})