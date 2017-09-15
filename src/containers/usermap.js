export const mapStateToUser = (state) => {
  return {
    user: state.users.get('user'),
    loading: state.users.get('loading')
  }
}