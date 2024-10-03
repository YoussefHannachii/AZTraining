const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

// Key Vault URL
const keyVaultName = "your-key-vault-name";
const vaultUri = `https://${keyVaultName}.vault.azure.net/`;

// Azure authentication with DefaultAzureCredential
const credential = new DefaultAzureCredential();

// Secret client to access the secrets in Key Vault
const client = new SecretClient(vaultUri, credential);

// Function to get a secret from Key Vault
async function getSecret() {
  const secretName = "";
  try {
    const retrievedSecret = await client.getSecret(secretName);
    console.log(`The secret value is: ${retrievedSecret.value}`);
  } catch (err) {
    console.error("Error retrieving secret:", err);
  }
}

// Call the function
getSecret();
