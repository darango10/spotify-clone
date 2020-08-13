export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finishing developing...
    // token:"BQATlZG8SUj0-mwq5Mny3RknFcx3ZTr7HwU12jUpkByvjKZoH3s4K4w4ka3wIU78m8RjKpuOmLb-2aMEHsojULZGBJgjnjoqh7mu4GPFaMap7D_7nEG7JMxJjy9ld72UIERvhfn9qsLe6Bjn45ueHrR3L783Bw"
};

const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        default:
            return state;
    }
}

export default reducer;
