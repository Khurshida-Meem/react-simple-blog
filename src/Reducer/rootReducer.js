const initState = {
    posts: [ 
        {
            id: 1,
            title: "doloribus ad provident suscipit at",
            body: "qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos veritatis officiis exercitationem vel fugit aut necessitatibus totam omnis rerum consequatur expedita quidem cumque explicabo"
            },
            {
            id: 2,
            title: "asperiores ea ipsam voluptatibus modi minima quia sint",
            body: "repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt"
            },
            {
            id: 3,
            title: "dolor sint quo a velit explicabo quia nam",
            body: "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse"
            },
    ]
}

const rootReducer = (state= initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;

}

export default rootReducer;