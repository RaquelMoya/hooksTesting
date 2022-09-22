import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter Hook', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
        expect(result.current.increment).toEqual(expect.any(Function));
        expect(result.current.decrement).toEqual(expect.any(Function));
        expect(result.current.reset).toEqual(expect.any(Function));
    });
    
    test('should have the counter in 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });
    
    test('should increment the counter in 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
        increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(101);
    });
    
    test('should decrement the counter in 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
        decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(99);
    });
    
    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
        increment();
        reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(100);
    });
    });