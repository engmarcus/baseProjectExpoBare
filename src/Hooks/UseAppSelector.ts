import { RootState } from '@/Store';
import { 
    TypedUseSelectorHook, 
    useSelector 
} from 'react-redux';

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
