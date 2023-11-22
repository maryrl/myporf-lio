const userFoundByEmail = await this.userRepository.findByEmail(request.email);

if (userFoundByEmail) {
   throw new UserFoundError(
      `User already exists with email "${request.email}".`,
   );
}

const user = new User({
   // ...
});

await this.userRepository.create(user)

return {
   user,
};