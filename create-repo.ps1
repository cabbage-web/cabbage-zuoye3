$body = @{
    name = "growth-dungeon"
    description = "成长副本 - 30-60-90 学习路径设计器"
    private = $false
} | ConvertTo-Json

$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("2635136110@qq.com:006912cabbage"))

$result = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method POST -Headers @{
    Authorization = "Basic $auth"
} -Body $body -ContentType "application/json"

Write-Output $result.clone_url
