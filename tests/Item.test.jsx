import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Item from "../src/components/Item";
import { vi } from "vitest";

describe('Visual appearance', () => {
    
    it('has title and price tag', () => {
        render(<Item name={'test lamp'} id={1} price={100}/>)
        expect(screen.getByRole('heading', {level: 2}).textContent).toMatch(/test lamp/i)
        expect(screen.getByRole('heading', {level: 4}).textContent).toMatch(/100/i)
    });

    it('has a "Add to cart" button', () => {
        render(<Item name={'test lamp'} id={1} price={100}/>)
        expect(screen.getByRole('button', {name: 'Add to cart'}))
    });

})

describe("Functional parts of the component", () => {
    it('can increase the quantity', async () => {
        const user = userEvent.setup()
        const item = {
            name: 'Test Item',
            id: 123,
            price: 9.99,
        };
        

        render( <Item name={item.name} id={item.id} price={item.price} />)
        const button = screen.getByRole('button', {name: '+'})
        await user.click(button)
        
        await waitFor(() => {
            const quantityElement = screen.getByText(/Quantity:/);
            expect(quantityElement).toHaveTextContent('Quantity: 2');
          });

    })

    it('can decrease the quantity', async () => {
        const user = userEvent.setup()
        const item = {
            name: 'Test Item',
            id: 123,
            price: 9.99,
        };
        
        render( <Item name={item.name} id={item.id} price={item.price} />)
        const button = screen.getByRole('button', {name: '-'})
        await user.click(button)
        
        await waitFor(() => {
            const quantityElement = screen.getByText(/Quantity:/);
            expect(quantityElement).toHaveTextContent('Quantity: 1');
          });

    });

})