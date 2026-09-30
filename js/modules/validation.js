export function validateInterest({name, email, project}) {
 const errors = {};
 if (name.trim().length < 3) errors.name = 'Digite um nome com pelo menos três caracteres.';
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Digite um e-mail válido.';
 if (!project) errors.project = 'Escolha uma iniciativa.';
 return errors;
}
