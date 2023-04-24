// BEGIN
export const getMutualFriends = (user1, user2) => {
  const fr1 = user1.getFriends();
  const fr2 = user2.getFriends();
  return fr1.filter(friend => fr2.some(fr => fr.id === friend.id));
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});