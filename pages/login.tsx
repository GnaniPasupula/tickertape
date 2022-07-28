export default function login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>LOGIN</h1>
      <form className="flex flex-col items-center justify-center h-screen">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
