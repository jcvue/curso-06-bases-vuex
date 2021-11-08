import { CounterState } from '.';

export default (): CounterState => ({
    count: 0,
    lastMutation: 'none',
    loading: false,
    byValue: 0,
});
