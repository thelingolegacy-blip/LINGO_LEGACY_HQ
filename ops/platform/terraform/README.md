# Terraform integration gate — documentation only.
#
# Approved pipeline sequence:
#   terraform fmt -check -recursive
#   terraform init -backend=false
#   terraform validate
#   terraform plan -out=tfplan
#   review plan, cost, identity, region, networking, and teardown
#   apply only through a separately approved operator workflow
#
# Never commit tfstate, tfplan, credentials, subscription IDs if restricted,
# private keys, or secret values. Use a reviewed remote backend with encryption
# and state locking before managing shared resources.
#
# Cloud target intentionally not selected. AWS and Azure require distinct
# account/tenant and identity validation before a module can be authored.
