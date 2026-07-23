# Guia rápido de comandos

## Identidade e sistema

```bash
whoami
id
hostnamectl
cat /etc/os-release
uname -r
uptime
```

## Arquivos e diretórios

```bash
pwd
ls -lah
cd /caminho
mkdir -p pasta/subpasta
cp -a origem destino
mv origem destino
rm -i arquivo
file arquivo
stat arquivo
```

## Texto

```bash
cat arquivo
less arquivo
head -n 20 arquivo
tail -f arquivo
grep -Rni 'texto' caminho
cut -d: -f1 /etc/passwd
sort arquivo | uniq -c
awk -F: '{print $1}' /etc/passwd
sed -n '1,20p' arquivo
```

## Busca

```bash
find /etc -type f -name '*.conf'
find /var/log -type f -mtime -1
command -v programa
type comando
```

## Processos e serviços

```bash
ps aux
top
pgrep -a nome
systemctl status servico
systemctl is-active servico
systemctl is-enabled servico
systemctl --failed
journalctl -u servico --since today
```

## Armazenamento

```bash
lsblk -f
blkid
findmnt
df -hT
df -ih
du -sh caminho
```

## Rede

```bash
ip -brief address
ip route
ss -lntup
ping -c 4 destino
getent hosts nome
curl -I URL
nc -vz host porta
```

## Usuários e permissões

```bash
getent passwd usuario
getent group grupo
sudo useradd -m usuario
sudo usermod -aG grupo usuario
chmod 640 arquivo
chown usuario:grupo arquivo
getfacl caminho
setfacl -m u:usuario:rx caminho
```

## Pacotes — Debian/Ubuntu

```bash
apt search termo
apt show pacote
sudo apt update
sudo apt install pacote
apt list --upgradable
dpkg -L pacote
```

## Compactação e cópia

```bash
tar -czf arquivo.tar.gz pasta
tar -tzf arquivo.tar.gz
rsync -aHAX --dry-run origem/ destino/
scp arquivo usuario@host:/destino/
sftp usuario@host
```

!!! tip "Ajuda antes da tentativa"
    Use `man comando`, `comando --help`, `help comando` e `apropos termo`.
