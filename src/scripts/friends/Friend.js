
export const FriendHTML = (friendObj) => {
    return `
        <div class="friendList-item" id="friendId--${friendObj.id}">
            <p class="friendList-item-name">${friendObj.user.username}</p>
            <div class="friendList-item-actions">
                <button type="button" id="deleteFriend-btn--${friendObj.user.id}">Delete</button>
            </div>
        </div>
    `
}