import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Error from "../src/components/Error";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

describe("there's an error page", () => {
    it("generates error page with a custom error message",  () => {
        render(
            <MemoryRouter>
                <Error message='test error' />
            </MemoryRouter>
        )
        
        expect(screen.getByRole('heading').textContent).toContain('Oops')
        expect(screen.getByRole('heading').textContent).toContain('test error')
    })
})