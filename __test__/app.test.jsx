
import App from '../src/App.jsx'
import {describe, expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'

describe('App', () => {
    test("Deberia renderizar la app en el navegador", () => {
        render(<App/>)
    });
})